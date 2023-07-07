//variable that holds the NFT's
const NFTs = []

//Holding and storing the metadata of the NFT's
function mintNFT (_name, _eyecolor, _breed, _favoritefood ) {
    const NFT = {
        "name": _name,
        "eyecolor": _eyecolor,
        "breed": _breed,
        "favoriteFood": _favoritefood
    }
    NFTs.push (NFT);
}

//Loop that goes through the metadata and print on the console
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++) {

        console.log("\nID \t\t" + (i + 1));
        console.log("\nName: \t\t\t" + NFTs[i].name);
        console.log("Eye Color: \t\t" + NFTs[i].eyecolor);
        console.log("Breed: \t\t\t" + NFTs[i].breed);
        console.log("Favorite Food: \t" + NFTs[i].favoriteFood);
        console.log("\n==============================")
    }
}

//return and print the number of NFT's created
function getTotalSupply() {
    console.log("Total NFT Minted: " + NFTs.length);
}

mintNFT ("Chamchamp", "Black", "Shih Tzu", "Chicken");
mintNFT ("Chawchaw", "Brown", "Aspin", "Chicken");
mintNFT ("Cupcake", "Brown", "Aspin", "Liver");
mintNFT ("Candy", "Dark Brown", "German Shepherd", "Chicken");
listNFTs();

 getTotalSupply()
