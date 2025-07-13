import fs from "fs";
import https from "https";
import path from "path";

export function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        // Garante que o diretório existe
        fs.mkdirSync(path.dirname(destPath), { recursive: true });

        const file = fs.createWriteStream(destPath);
        https
            .get(url, (res) => {
                if (res.statusCode !== 200) {
                    reject(
                        new Error(
                            `Erro ao baixar ${url}: Código ${res.statusCode}`
                        )
                    );
                    return;
                }

                res.pipe(file).on("finish", () => {
                    file.close(() => {
                        console.log(
                            `✅ Download finalizado: ${path.basename(destPath)}`
                        );
                        resolve();
                    });
                });
            })
            .on("error", (err) => {
                fs.unlink(destPath, () => {});
                reject(new Error(`Erro ao baixar ${url}: ${err.message}`));
            });
    });
}
