/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  MonadUSDC,
  MonadUSDC_Approval,
  MonadUSDC_RoleAdminChanged,
  MonadUSDC_RoleGranted,
  MonadUSDC_RoleRevoked,
  MonadUSDC_Transfer,
} from "generated";

MonadUSDC.Approval.handler(async ({ event, context }) => {
  const entity: MonadUSDC_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.MonadUSDC_Approval.set(entity);
});

MonadUSDC.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: MonadUSDC_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.MonadUSDC_RoleAdminChanged.set(entity);
});

MonadUSDC.RoleGranted.handler(async ({ event, context }) => {
  const entity: MonadUSDC_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.MonadUSDC_RoleGranted.set(entity);
});

MonadUSDC.RoleRevoked.handler(async ({ event, context }) => {
  const entity: MonadUSDC_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.MonadUSDC_RoleRevoked.set(entity);
});

MonadUSDC.Transfer.handler(async ({ event, context }) => {
  const entity: MonadUSDC_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    block_number: event.block.number,
    timestamp: event.block.timestamp,
  };
  context.MonadUSDC_Transfer.set(entity);
});
