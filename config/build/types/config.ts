export type BuildMode = "development" | "production";

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildEnv {
    mode: BuildMode,
    port: number
}

export interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPath;
    isDev: boolean;
    port: number;
}
