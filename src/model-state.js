// Presentation of already-earned engine state only. This module never grants clues.
export function modelPartState(part, state = {}) {
  const open = state?.sluiceCover === 'open';
  const removed = state?.sluiceBlock === 'removed';
  const raised = state?.sluiceGate === 'raised';
  if (part === 'SluiceCover') return { visible: !open, lift: 0 };
  if (part === 'SluiceBlock') return { visible: !removed, lift: 0 };
  if (part === 'SluiceGate') return { visible: true, lift: raised ? 0.28 : 0 };
  if (part === 'SluiceReducedFlow') return { visible: !raised, lift: 0 };
  if (part === 'SluiceRestoredFlow') return { visible: raised, lift: 0 };
  const trayOpen = state.tray === 'open';
  const tab = state.tab || 'contact';
  const tabAtContact = tab === 'contact';
  const energized = tabAtContact || (tab === 'home' && !trayOpen);
  const drawerOpen = state.drawer === 'open';
  // Blender front -Y becomes glTF +Z. Travel is absolute relative to export pose.
  if (part === 'FutureTraySlide') return { visible: true, lift: 0, depth: trayOpen ? 1.03 : 0 };
  if (part === 'FutureReleasePlate') return { visible: true, lift: 0, depth: state.tray === 'released' ? -.025 : 0 };
  if (part === 'FutureHistoricSerial') return { visible: false, lift: 0 };
  if (part === 'FutureContactOn') return { visible: energized, lift: 0 };
  if (part === 'FutureContactOff') return { visible: !energized, lift: 0 };
  if (part === 'FutureTabContact') return { visible: tabAtContact, lift: 0 };
  if (part === 'FutureTabHeld') return { visible: state.tab === 'held', lift: 0 };
  if (part === 'FutureTabHome') return { visible: tab === 'home', lift: 0, depth: trayOpen ? 1.03 : 0 };
  if (part === 'FutureDrawerRailMid') return { visible: true, lift: drawerOpen ? -0.044143779 : 0, depth: drawerOpen ? .42 : 0 };
  if (part === 'FutureReturnDrawer') return { visible: true, lift: drawerOpen ? -0.088287557 : 0, depth: drawerOpen ? .84 : 0 };
  if (part === 'FutureCartSeal' || part === 'FutureShippingBand' || part === 'FutureDrawerSeal') return { visible: (state.drawer || 'sealed') === 'sealed', lift: 0 };
  if (part === 'FutureOriginalDisc') return { visible: state.disc !== 'removed', lift: drawerOpen ? -0.088287557 : 0, depth: drawerOpen ? .84 : 0 };
  if (part === 'FutureTestDiscHolder') return { visible: !['tested', 'blocked'].includes(state.chute), lift: 0 };
  if (part === 'FutureTestDiscDrawer') return { visible: ['tested', 'blocked'].includes(state.chute), lift: drawerOpen ? -0.088287557 : 0, depth: drawerOpen ? .84 : 0 };
  if (part === 'FutureSecondTestDiscHolder') return { visible: state.chute !== 'blocked', lift: 0 };
  if (part === 'FutureSecondTestDiscBlocked') return { visible: state.chute === 'blocked', lift: 0 };
  return null;
}
export function applyInvestigationModelState(model, state = {}) {
  model?.traverse(node => {
    const presentation = modelPartState(node.userData?.part, state);
    if (!presentation) return;
    if (!Number.isFinite(node.userData.investigationBaseY)) node.userData.investigationBaseY = node.position.y;
    node.visible = presentation.visible;
    node.position.y = node.userData.investigationBaseY + presentation.lift;
    if (Number.isFinite(presentation.depth)) {
      if (!Number.isFinite(node.userData.investigationBaseZ)) node.userData.investigationBaseZ = node.position.z;
      node.position.z = node.userData.investigationBaseZ + presentation.depth;
    }
  });
}
