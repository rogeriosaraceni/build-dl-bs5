export function getFileContent(dir, file) {
    if (dir === 'includes' && file === 'head.asp') {
        return `...`; // conteúdo completo da head.asp
    }

    if (dir === 'pages/home' && file === 'index.asp') {
        return `...`; // conteúdo completo da home/index.asp
    }

    return `<!-- ${file} -->`;
}

export const rootIndexAsp = `<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<%
response.redirect "/pages/home/"
%>
`;

export const editorConfigContent = `root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
`;

export const packageJsonContent = {
    name: "dlfelix-bs5",
    version: "1.0.0",
    description: "Projeto web dlfelix-bs5",
    main: "index.js",
    scripts: {},
    author: "",
    license: "MIT"
};
