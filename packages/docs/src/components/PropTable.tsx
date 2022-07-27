import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';

const specifierRegExp = /@overcast\-ui\/([^\/]*)(?:\/)?(\S*)/g;
const fileRegExp = /\.\.\/(\S+?)\/src\/(\S+?)\.tsx/g;

const matchSpecifier = (filePath: string, specifier: string): boolean => {
    const specifierMatch = specifierRegExp.exec(specifier);
    if (!specifierMatch) return false;

    const match = fileRegExp.exec(filePath);
    if (!match) return false;
    else {
        const pkg = match[1];
        const file = match[2];

        if (pkg !== specifierMatch[1]) return false;

        console.log(file === specifierMatch[2], file === `${specifierMatch[2]}/index`)

        if (file === specifierMatch[2] || file === `${specifierMatch[2]}/index`) return true;
        else return false;
    }
};


export function useComponentMetadata(importSpecifier: string) {
    const data = useGlobalData();

    return (data["docusaurus-plugin-react-docgen-typescript"].default as any).find(
        (x: { filePath: string }) => matchSpecifier(x.filePath, importSpecifier)
    );
}

export function useComponentProps(componentName: string) {
    const metadata = useComponentMetadata(componentName)
    console.log(metadata);
    return metadata?.props;
}

export const PropTable = ({ component }) => {
    const props = useComponentProps(component) as any;

    if (!props) {
        return null;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default Value</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props).map(key => {
                    return (
                        <tr key={key}>
                            <td>
                                <code>{key}</code>
                            </td>
                            <td>
                                <code>{props[key].type?.name}</code>
                            </td>
                            <td>{props[key].defaultValue && <code>{props[key].defaultValue.value}</code>}</td>
                            <td>{props[key].required ? 'Yes' : 'No'}</td>
                            <td>{props[key].description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default PropTable;