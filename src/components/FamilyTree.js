import React from "react";
import { Tree } from "react-d3-tree";
import { treeData } from "./data";

console.log(treeData.map((m) => m.child));

export const FamilyTree = () => {
  const nodeSize = { x: 300, y: 200 };

  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -150,
    y: 25,
  };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
    <g>
      {nodeDatum.child ? (
        <circle r={15} fill="white" />
      ) : (
        <circle r={15} fill="red" />
      )}
      <foreignObject {...foreignObjectProps}>
        <div
          onClick={toggleNode}
          className="bg-gradient-to-r py-4 bg-green-400 rounded-md neon-shadow"
        >
          <div className="flex justify-center">
            {/* <img
              className="w-20 h-20 pl-1 rounded-md"
              src={nodeDatum.photo}
              alt={nodeDatum.name}
            /> */}
            <div>
              <h3 className="text-xl text-center font-bold pl-2 py-2">
                {nodeDatum.name}
              </h3>
              {/* <p className="text-lg pl-2 font-semibold">King of my family</p> */}
            </div>
          </div>
        </div>
      </foreignObject>
    </g>
  );

  return (
    <div style={{ height: "100vh" }}>
      {/* <TreeForm onSubmit={addNode} /> */}
      <Tree
        zoom="0.1"
        data={treeData}
        orientation="vertical"
        separation={{ siblings: 4, nonSiblings: 3 }}
        translate={{ x: 650, y: 150 }}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        enableLegacyTransitions={true}
        transitionDuration={500}
        transitionEasing="ease"
        draggable={false}
        depthFactor={290}
      />
    </div>
  );
};
