export class DirectoryModel {
    public name: string;
    public childDirectories: DirectoryModel[] = [];
    public fileNames: string[] = [];
}
