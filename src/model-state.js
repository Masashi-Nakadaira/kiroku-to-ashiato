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
  return null;
}
export function applyInvestigationModelState(model, state = {}) {
  model?.traverse(node => {
    const presentation = modelPartState(node.userData?.part, state);
    if (!presentation) return;
    if (!Number.isFinite(node.userData.investigationBaseY)) node.userData.investigationBaseY = node.position.y;
    node.visible = presentation.visible;
    node.position.y = node.userData.investigationBaseY + presentation.lift;
  });
}
