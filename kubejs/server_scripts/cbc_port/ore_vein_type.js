// Ported from CreateTheBrassConcerto.
// Copyright (C) 2025-2026 Slimeli_, Apertyotis, Fly_Machine.
// SPDX-License-Identifier: GPL-3.0-only
// Adapted for Create Aero Meow on Minecraft 1.21.1 / KubeJS 2101.

ServerEvents.recipes(event => {
  event.remove({ id: 'vintageimprovements:pressurizing/sulfur_trioxide' })
  event.remove({ id: 'vintageimprovements:crushing/scoria' })
  event.remove({ id: 'vintageimprovements:crushing/scoria_recycling' })
  event.replaceOutput({ output: 'vintageimprovements:sulfur_chunk' }, 'vintageimprovements:sulfur_chunk', '')
  event.replaceOutput({ output: 'vintageimprovements:vanadium_nugget' }, 'vintageimprovements:vanadium_nugget', '')

  event.remove({ id: 'createoreexcavation:ore_vein_type/quartz' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/nether_gold' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/redstone' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/hardened_diamond' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/diamond' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/copper' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/gold' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/iron' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/zinc' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/water' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/netherite' })
  event.remove({ id: 'createoreexcavation:ore_vein_type/glowstone' })

  event.remove({ id: 'createoreexcavation:drilling/glowstone' })
  event.remove({ id: 'createoreexcavation:drilling/emerald' })
  event.remove({ id: 'createoreexcavation:drilling/quartz' })
  event.remove({ id: 'createoreexcavation:drilling/lapis' })
  event.remove({ id: 'createoreexcavation:drilling/nether_gold' })
  event.remove({ id: 'createoreexcavation:drilling/hardened_diamond' })
  event.remove({ id: 'createoreexcavation:drilling/diamond' })
  event.remove({ id: 'createoreexcavation:drilling/coal' })
  event.remove({ id: 'createoreexcavation:drilling/copper' })
  event.remove({ id: 'createoreexcavation:drilling/redstone' })
  event.remove({ id: 'createoreexcavation:drilling/gold' })
  event.remove({ id: 'createoreexcavation:drilling/iron' })
  event.remove({ id: 'createoreexcavation:drilling/zinc' })
  event.remove({ id: 'createoreexcavation:drilling/netherite' })
  event.remove({ id: 'createoreexcavation:extractor/water' })
})
