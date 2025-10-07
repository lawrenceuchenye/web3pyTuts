import assert from "assert";
import { 
  TestHelpers,
  MonadUSDC_Approval
} from "generated";
const { MockDb, MonadUSDC } = TestHelpers;

describe("MonadUSDC contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for MonadUSDC contract Approval event
  const event = MonadUSDC.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("MonadUSDC_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await MonadUSDC.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMonadUSDCApproval = mockDbUpdated.entities.MonadUSDC_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMonadUSDCApproval: MonadUSDC_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMonadUSDCApproval, expectedMonadUSDCApproval, "Actual MonadUSDCApproval should be the same as the expectedMonadUSDCApproval");
  });
});
