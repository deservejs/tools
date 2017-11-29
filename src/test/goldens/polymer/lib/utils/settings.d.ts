/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/settings.html
 */

/// <reference path="boot.d.ts" />
/// <reference path="resolve-url.d.ts" />

declare namespace Polymer {

  /**
   * Legacy settings.
   */
  namespace settings {
  }


  /**
   * Sets the global rootPath property used by `Polymer.ElementMixin` and
   * available via `Polymer.rootPath`.
   */
  function setRootPath(path: string): void|null;


  /**
   * Sets the global sanitizeDOMValue available via `Polymer.sanitizeDOMValue`.
   */
  function setSanitizeDOMValue(newSanitizeDOMValue: ((p0: any, p1: string, p2: string, p3: Node|null) => any)|undefined): void|null;


  /**
   * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
   */
  function setPassiveTouchGestures(usePassive: boolean): void|null;
}
