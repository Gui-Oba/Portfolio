import React from "react";
import PersonCard from "./PersonCard";

/**
 * Recursively renders a family tree with connector lines
 *
 * @param {{ node: { name: string; description: string; children?: any[] } }} props
 */
export default function FamilyTree({ node }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <section className="flex flex-col items-center">
      {/* Parent node + vertical connector */}
      <div className="relative flex flex-col items-center">
        <PersonCard person={node} />
        {hasChildren && <div className="w-px h-6 bg-gray-300"></div>}
      </div>

      {/* Children nodes + horizontal connector */}
      {hasChildren && (
        <div className="relative mt-6 flex flex-wrap justify-center gap-8 lg:gap-12">
          {/* horizontal line connecting all children */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>

          {node.children.map((child) => (
            <FamilyTree key={child.name} node={child} />
          ))}
        </div>
      )}
    </section>
  );
}