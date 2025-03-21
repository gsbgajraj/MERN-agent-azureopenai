import React from "react";

const FolderTree = ({ structure }) => {
    const renderTree = (node, name = "") => {
        return (
            <div className="pl-4">
                <strong>{name}</strong>
                {Object.keys(node).map((key) => (
                    <div key={key}>{typeof node[key] === "object" ? renderTree(node[key], key) : key}</div>
                ))}
            </div>
        );
    };

    return <div className="bg-gray-100 p-4 rounded-lg">{renderTree(structure)}</div>;
};

export default FolderTree;
