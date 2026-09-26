// Ported from CreateTheBrassConcerto.
// Copyright (C) 2025-2026 Slimeli_, Apertyotis, Fly_Machine.
// SPDX-License-Identifier: GPL-3.0-only
// Adapted for Create Aero Meow on Minecraft 1.21.1 / KubeJS 2101.

// 右键切换离心机红石应用状态
BlockEvents.rightClicked('vintageimprovements:centrifuge', event => {
  let basin = event.block.entityData.Basins
  if (basin != 4 || String(event.hand) != 'MAIN_HAND' || event.player.mainHandItem.id != 'create:wrench') {
    return
  }

  let redstone = event.block.entityData.RedstoneApp
  let pos = event.block.pos
  event.player.swing(event.hand)
  event.block.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:block.copper.place', 'blocks', 0.6, 1.2)

  let dimension = event.block.level.dimension
  let dimensionId = dimension.location ? dimension.location().toString() : dimension.toString()
  let value = redstone == 0 ? 1 : 0

  event.block.level.server.runCommandSilent(
    `/execute in ${dimensionId} run data modify block ${pos.x} ${pos.y} ${pos.z} RedstoneApp set value ${value}b`
  )
})
