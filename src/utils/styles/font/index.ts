const FontFamily = {
  /**
   * font-weight==> 300
   * @returns
   */
  fontFamilyLight: (): { fontWeight: string } => ({
    fontWeight: '300',
  }),

  /**
   * font-weight==> 400
   * @returns
   */
  fontFamilyRegular: (): { fontWeight: string } => ({
    fontWeight: '400',
  }),

  /**
   * font-weight==> 500
   * @returns
   */
  fontFamilyMedium: (): { fontWeight: string } => ({
    fontWeight: '500',
  }),

  /**
   * font-weight==> 600
   * @returns
   */
  fontSemiBold: (): { fontWeight: string } => ({
    fontWeight: '600',
  }),

  /**
   * font-weight==> 700
   * @returns
   */
  fontFamilyBold: (): { fontWeight: string } => ({
    fontWeight: '700',
  }),

  /**
   * font-weight==> 800
   * @returns
   */
  fontFamilyExtraBold: (): { fontWeight: string } => ({
    fontWeight: '800',
  }),
};

export default FontFamily;
