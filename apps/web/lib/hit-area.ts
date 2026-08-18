/**
 * Extends a control's pointer target without changing how it looks.
 *
 * -inset-y-2 adds 8px above and below, taking a 24px control to 40px and a 28px one to
 * 44px. Both rows sit inside at least 12px of padding, so the extension stays within its
 * container and never reaches a neighbouring row.
 */
export const hitArea =
  "relative before:absolute before:inset-x-0 before:-inset-y-2 before:content-['']"

/**
 * Same, plus 4px of width on each side, for controls whose visible box is under 40px
 * wide. Only safe in a row spaced at gap-x-2 or wider: at the gap-x-0.5 the design
 * system uses elsewhere, neighbouring targets would overlap, and a click landing on the
 * wrong control is worse than a narrow one.
 */
export const hitAreaWide =
  "relative before:absolute before:-inset-x-1 before:-inset-y-2 before:content-['']"

/**
 * For a 28px icon button that needs to reach 40. Requires gap-x-3, so the 6px added on
 * each side exactly meets its neighbour's target without crossing it.
 */
export const hitAreaIcon =
  "relative before:absolute before:-inset-x-1.5 before:-inset-y-2 before:content-['']"
