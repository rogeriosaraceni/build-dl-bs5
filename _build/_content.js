export function getFileContent(dir, file) {
    if (dir === 'includes' && file === 'head.asp') {
        return `<%versionCache = "?v=1.0.0"%>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<meta name="robots" content="nofollow">

<!-- Favicons -->
<link rel="icon" sizes="32x32" type="image/png" href="/assets/favicons/favicon-32x32.png">
<link rel="apple-touch-icon" href="/assets/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="manifest" href="/assets/favicons/manifest.json">

<title></title>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans&display=swap">

<!-- Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css<%=versionCache%>">

<!-- App CSS -->
<link rel="stylesheet" href="/assets/css/main.css<%=versionCache%>">

<!-- Libs JS -->
<script src="/assets/libs/jquery/jquery.min.js<%=versionCache%>"></script>

<!-- Bootstrap JS -->
<script src="/assets/bootstrap/bootstrap.bundle.min.js<%=versionCache%>"></script>

<!-- App JS -->
<script src="/assets/js/main.js<%=versionCache%>"></script>`;
    }

    if (dir === 'pages/home' && file === 'index.asp') {
        return `<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<!--#include virtual="/dlfelix/connection.asp"-->
<!--#include virtual="/dlfelix/lock.asp"-->

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!--#include virtual="/includes/head.asp"-->
    </head>

    <body>
        <!--#include virtual="/components/loader.asp"-->
        <!--#include virtual="/includes/header.asp"-->

        <main class="main-app">
            <section class="container-fluid">
                <nav aria-label="breadcrumb" class="breadcrumb-app">
                    <div class="card card-body">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/home/"><i class="bi bi-house-fill"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </div>
                </nav>
            </section>

            <section class="container-fluid">

            </section>
        </main>

        <!--#include virtual="/includes/footer.asp"-->
    </body>
</html>`;
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
