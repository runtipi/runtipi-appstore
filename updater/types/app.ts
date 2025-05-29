export interface UpdateInfo {
  appId: string;
  oldVersion: string;
  newVersion: string;
  updates: {
    service: string;
    oldImage: string;
    newImage: string;
    updateType: "major" | "minor" | "patch" | null;
  }[];
}
