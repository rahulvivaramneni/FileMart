import expect from 'chai'

describe("Frieght contract setup", function () {
  it("Deployment should assign the name field of the contract", async function () {
    const [owner] = await ethers.getSigners();

    const DataContract = await ethers.getContractFactory("DataContract");
    const TEST_NAME = "test FileMart dataset name"

    const c = await DataContract.deploy(TEST_NAME);

    const name = await c.name();
    expect(name).to.equal(TEST_NAME);
  });

  it("Deployment should assign the owner field of the contract", async function () {
    const [owner] = await ethers.getSigners();

    const DataContract = await ethers.getContractFactory("DataContract");
    const TEST_NAME = "test FileMart dataset name"

    const c = await DataContract.deploy(TEST_NAME);

    const contractOwner = await c.owner();
    expect(contractOwner).to.equal(owner.address);
  });
});