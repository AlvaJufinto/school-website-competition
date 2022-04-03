export const googleDriveParser = (link) => {
    return `https://drive.google.com/uc?export=download&id=${link?.split("/d/")[1]?.split("/")[0]}`;
}