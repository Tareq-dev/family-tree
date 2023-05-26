import React from "react";
import { Tree } from "react-d3-tree";
import { treeData } from "./data";

export const FamilyTree = () => {
  const isMobile = window.innerWidth <= 768;

  const nodeSize = isMobile ? { x: 150, y: 100 } : { x: 300, y: 200 };

  // const foreignObjectProps = {
  //   width: nodeSize.x,
  //   height: nodeSize.y,
  //   x: -150,
  //   y: 25,
  // };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: isMobile ? -75 : -150,
    y: isMobile ? 15 : 25,
  };
  const translate = isMobile ? { x: 180, y: 150 } : { x: 650, y: 150 };

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

  function getAllNames(data) {
    const names = [];

    function traverseTree(nodes) {
      nodes.forEach((node) => {
        names.push(node.name);
        if (node.children) {
          traverseTree(node.children);
        }
      });
    }

    traverseTree(data);

    return names;
  }

  const allNames = getAllNames(treeData);
  console.log(allNames);

  return (
    <div style={{ height: "100vh" }}>
      <Tree
        zoom="0.4"
        data={treeData}
        orientation="vertical"
        separation={{ siblings: isMobile ? 1.5 : 4, nonSiblings: 3 }}
        translate={translate}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        enableLegacyTransitions={true}
        transitionDuration={800}
        transitionEasing="ease"
        draggable={isMobile ? true : false}
        depthFactor={isMobile ? 200 : 290}
      />
    </div>
  );
};
