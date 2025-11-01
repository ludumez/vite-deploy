import { CopyBlock } from 'react-code-blocks';
import { Link } from "react-router-dom";

export function FlowField() {
      return (
            <>

                  <div className='headerContainer'>
                        <div className="container">

                              <div className="shortcuts-block">
                                    <Link to={'/'} className="shortcutLink">Home</Link>
                                    <Link to={'/articles'} className="shortcutLink">Articles</Link>
                                    <a>About</a>
                              </div>
                        </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                        <h2>Flow Fields for Large Quantities of Enemies in Unity.</h2>
                  </div>
                  <br />
                  <div className='quote'>
                        “We want over 500 enemies on screen at the same time”
                  </div>
                  <br />
                  I am currently working on a survivor like game in which we want a large amount of enemies on screen at the same time. This can be surprisingly difficult to achieve, very early on we find bottle necks in performance that we will need to tackle.
                  <br />
                  For the following explanation, everything has been done in Unity 3D using<b> C#, Compute Shaders and the Unity Jobs system.</b>
                  <br />
                  <br />
                  My initial approach was using Unity's Nav Mesh Agents, these agents provide the target detection, obstacle avoidance and agent collision I needed.
                  <br />
                  <br />
//To do: picture of nav mesh agent following path
                  <br />
                  <br />
                  <div className='quote'>
                        “Sometimes the agents stop moving and resume walking after a while, same thing for the player”
                  </div>
                  <br />
                  The main issue we encounter using unity's built in navigation is the path calculation time. We want our agents to chase the players in the game. Meaning, any time any player updates their position, all agents will need to update their path. The time an agent takes to calculate its path also depends on the complexity of the terrain, the more obstacles you have, the longer an agent is going to take.
                  <br />
                  <br />
                  <b>So we end up with 1 expensive path calculation per agent, which increases with the terrain complexity.  </b>
                  <br />
                  <br />
                  Navmesh agents in Unity queue up for their path calculation, when we call for a new path to be calculated we need to wait for each path before that to finish its calculation before the next path is calculated. This results in agents stopping mid way.
                  <br />
                  <br />
                  <div className='quote'>
                        “Flow fields only need to be calculated once and don’t depend of any terrain complexity”
                  </div>
                  <br />
                  A flow field is a grid of cells in a world which contains a position and a flow direction. In our case, the flow field directions will target a list of target positions, where our players are located.
                  <br />
                  <br />
                  The main advantage of flow fields is that we only need to calculate everything once and each individual agent only needs to sample the resulting calculations. Only having to calculate everything once also means we can more easily optimize.
                  <br />
                  <br />

                  <p className='smallerTitle'>
                        How to make a flow field:
                  </p>
                  The main components of our flowfield are: a grid cell and a grid array.
                  <br />
                  <br />
                  A grid cell will be each defined square area that contains our grids positions, coordinates, calculated flow direction, calculated cost and obstacle data.
                  <br />
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>

                        <CopyBlock
                              language="csharp"
                              text={`public struct GridCell
{
    public Vector2Int gridPos; //Gird coordinates inside the 2D array
    public Vector3 worldPos;
    public Vector3 flowDirection; //Resulting 3D direction in a given grid cell
    public int cost;
    public int isObstacle; //Collision detection, is int to be shader compatible
}      `}
                              codeBlock
                              showLineNumbers={true}
                        >
                        </CopyBlock>
                  </div>
                  <br />
                  <br />
                  A grid array is a 2D array of all our grid cells for our given area. For our case we use a defined grid area and cell size.
                  <br />
                  <br />
                  <CopyBlock
                        language="csharp"
                        text={`private GridCell[,] _gridArray;

void GenerateGridArray()
{
      _gridArray = new GridCell[Mathf.CeilToInt(_gridArea.x / _cellSize), Mathf.CeilToInt(_gridArea.y / _cellSize)];
      for (int x = 0; x < Mathf.CeilToInt(_gridArea.x / _cellSize); x++)
      {
            for (int y = 0; y < Mathf.CeilToInt(_gridArea.y / _cellSize); y++)
            {
                Vector3 targetPosition = new Vector3(x * _cellSize, 0, y * _cellSize) + transform.position;
                Vector2Int gridPosition = new Vector2Int(x, y);
                GridCell newCell = new GridCell(gridPosition, targetPosition);
                _gridArray[x, y] = newCell;
                var hit = Physics.OverlapBox(targetPosition, Vector3.one * _cellSize * .5f, Quaternion.identity, _collisionLayer);
                if (hit.Length > 0)                
                    newCell.isObstacle = 1;
            }
      }
}            `}
                        codeBlock
                        showLineNumbers={true}
                  >
                  </CopyBlock>
                  <br />
                  <br />
                  When initializing our grid array we create a new cell for each grid point and calculate any obstacle present in our grid.
                  <br />
                  <br />
                  Now to the actual tricky part.
                  <br />
                  Our main object of our flow field is to obtain a move direction on each grid cell. To do this we assign a cost to each grid cell depending on how long it takes to reach any of the target position cells.
                  <br />
                  <br />
                  To process our grid array we have 3 parts.
                  <ol>
                        <li>
                              <b>Initialization:</b> In which we create our actual grid array and obtain any obstacle data we may need. This step only happens once on start or on collision update.
                        </li>
                        <li>
                              <b>Cost calculations:</b> In which we calculate the final cost of each grid cell. It is called every grid update.
                        </li>
                        <li>
                              <b>Direction calculation:</b> In which we calculate the final direction each grid cell needs to move to go to the next cheapest cell.
                        </li>
                  </ol>
                  We have already explained how the grid initialization will work.
                  <br />
                  <br />
                  <div className='quote'>
                        “Compute shaders are very good and doing the same thing over and over”
                  </div>
                  <br />
                  The cost calculation is the most expensive part of our flow field. To calculate the cost we will implement a <b><a href='https://en.wikipedia.org/wiki/Flood_fill' target='blank'>flood fill algorithm</a></b>. In my case a compute shader variant.
                  <br />
                  <br />
                  The main advantage of a compute shader is that it is very efficient for repeating calculations by using our GPUs memory. The main drawback is that it requires read and writes from the GPU to the CPU, which can be expensive.
                  <br />
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Wfm_floodfill_animation_queue.gif"></img>
                  </div>
                  <br />
                  <br />
                  Our flood fill algorithm will iterate through all the cells of our grid recursively so that we add a cost to each point of our grid depending on our points distance with the cheapest cell. To modify our flood fill algorithm to be compatible with compute shaders we will implement a ping pong something….
                  We need to dispatch our code.
                  <br />
                  <br />
//ToDO: gif of flood field resultin

                  <div style={{ display: "flex", justifyContent: "center" }}>

                        <CopyBlock
                              language="csharp"
                              text={`StructuredBuffer<GridCell> srcCells;
RWStructuredBuffer<GridCell> dstCells;

int gridWidth;
int gridHeight;
            [numthreads(8, 8, 1)]
void PropagateCost(uint3 id : SV_DispatchThreadID)
{
    uint x = id.x, y = id.y;
    if (x >= gridWidth || y >= gridHeight)
        return;
   
    uint index = y * gridWidth + x;
    GridCell me = srcCells[index];
    if (me.isObstacle == 1)
    {
        // keep obstacle cost as some max
        dstCells[index] = me;
        return;
    }

    int best = me.cost; // current cost (maybe seed = 0, or large)
    // neighbor offsets (4-connected)
    int2 offsets[4] = { int2(1, 0), int2(-1, 0), int2(0, 1), int2(0, -1) };

    for (int i = 0; i < 4; i++)
    {
        int nx = int(x) + offsets[i].x;
        int ny = int(y) + offsets[i].y;
        if (nx < 0 || ny < 0 || nx >= gridWidth || ny >= gridHeight)
            continue;
        uint nidx = ny * gridWidth + nx;
        GridCell neigh = srcCells[nidx];
        if (neigh.isObstacle == 1)
            continue;
        int candidate = neigh.cost + 1;
        if (candidate < best)
        {
            best = candidate;
        }
    }

    GridCell result = me;
    result.cost = best;
    dstCells[index] = result;
}          `}
                              codeBlock
                              showLineNumbers={true}
                        >
                        </CopyBlock>
                  </div>
                  <br />
                  <br />
                  We can share our compute buffer between our shaders to avoid duplicating and assigning unnecessary buffer data between shaders.
                  <br />
                  <br />
                  The direction calculation is another compute shader, this time we only need to iterate through the full grid array once. We will sample each grid point and its neighbours and get a weighted average, ignoring any obstacles.
                  <br />
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                        <CopyBlock
                              language="csharp"
                              text={`RWStructuredBuffer<GridCell> grid;
int gridWidth;
int gridHeight;
float cellSize;

[numthreads(8, 8, 1)]
void CalculateDirection(uint3 id : SV_DispatchThreadID)
{
    if (id.x >= gridWidth || id.y >= gridHeight)
        return;

    //flatten grid array
    uint index = id.y * gridWidth + id.x;
    GridCell cell = grid[index];

    if (cell.isObstacle == 1)
        return;

    float maxCost = 1.0;
    float3 dirSum = float3(0, 0, 0);

    // Iterate over 4 cardinal directions (up, down, left, right)
    int2 offsets[4] = {int2(0, 1), int2(0, -1), int2(1, 0), int2(-1, 0)};

    for (int i = 0; i < 4; i++)
    {
        int2 nPos = cell.gridPos + offsets[i];
        if (nPos.x < 0 || nPos.y < 0 || nPos.x >= gridWidth || nPos.y >= gridHeight)
            continue;

        uint nIndex = nPos.y * gridWidth + nPos.x;
        GridCell neighbour = grid[nIndex];

        if (neighbour.isObstacle == 1)
            continue;

        if (neighbour.cost > maxCost)
            maxCost = neighbour.cost;
    }

    for (int e   = 0; e < 4; e++)
    {
        int2 nPos = cell.gridPos + offsets[e];
        if (nPos.x < 0 || nPos.y < 0 || nPos.x >= gridWidth || nPos.y >= gridHeight)
            continue;

        uint nIndex = nPos.y * gridWidth + nPos.x;
        GridCell neighbour = grid[nIndex];

        if (neighbour.isObstacle == 1)
            continue;

        float3 dir = normalize(neighbour.worldPos - cell.worldPos);
        float w = (float) neighbour.cost / maxCost;
        dirSum += dir * w;
    }

    cell.flowDirection = normalize(dirSum);
    grid[index] = cell;
}       `}
                              codeBlock
                              showLineNumbers={true}
                        >
                        </CopyBlock>
                  </div>
                  <p className='smallerTitle'>
                        Some more thoughts:
                  </p>
                  The resulting flow field is incredibly fast for my use case. There is almost no performance difference between having 10 agents active and having 500 agents active.
                  <br />
                  This performance gain comes with some big constraints: there is only a very limited play area and we can only move in a 2D space.
                  <br />
                  <br />
//Gif of final grid with directions
            </>
      )
}

