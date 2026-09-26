// Ported from CreateTheBrassConcerto.
// Copyright (C) 2025-2026 Slimeli_, Apertyotis, Fly_Machine.
// SPDX-License-Identifier: GPL-3.0-only
// Adapted for Create Aero Meow on Minecraft 1.21.1 / KubeJS 2101.

let $Boolean = Java.loadClass('java.lang.Boolean')
const inversedDirectionUpper = {
  WEST: 'EAST',
  SOUTH: 'NORTH',
  NORTH: 'SOUTH',
  EAST: 'WEST',
  UP: 'DOWN',
  DOWN: 'UP'
}

// 右键切换管道开口，Shift 切换对面
BlockEvents.rightClicked('create:fluid_pipe', event => {
  if (event.item.id != 'minecraft:air' || String(event.hand) != 'MAIN_HAND') {
    return
  }

  let state = event.block.properties
  let blockState = event.block.blockState
  let pos = event.block.pos
  let openCount = 0

  event.player.swing(event.hand)
  event.block.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:block.copper.place', 'blocks', 0.6, 1.2)

  for (let value of [state.west, state.east, state.south, state.north, state.up, state.down]) {
    if (value == 'true') {
      openCount++
    }
  }

  let face = event.facing.toString().toUpperCase()
  if (event.player.isShiftKeyDown()) {
    face = inversedDirectionUpper[face]
  }

  let open = blockState.getValue(BlockProperties[face])
  if (openCount <= 2 && open) {
    event.player.setStatusMessage(Text.translate('kubejs.message.pipe'))
    return
  }

  event.block.level.setBlockAndUpdate(pos, blockState.setValue(BlockProperties[face], open ? $Boolean.FALSE : $Boolean.TRUE))
})

// 带壳流体管道同样支持右键切换
BlockEvents.rightClicked('create:encased_fluid_pipe', event => {
  if (event.item.id != 'minecraft:air' || String(event.hand) != 'MAIN_HAND') {
    return
  }

  let blockState = event.block.blockState
  let pos = event.block.pos
  event.player.swing(event.hand)
  event.block.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:block.copper.place', 'blocks', 0.6, 1.2)

  let face = event.facing.toString().toUpperCase()
  if (event.player.isShiftKeyDown()) {
    face = inversedDirectionUpper[face]
  }

  let open = blockState.getValue(BlockProperties[face])
  event.block.level.setBlockAndUpdate(pos, blockState.setValue(BlockProperties[face], open ? $Boolean.FALSE : $Boolean.TRUE))
})
