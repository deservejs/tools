/// <reference path="../utils/boot.d.ts" />
/// <reference path="../utils/resolve-url.d.ts" />

declare namespace Polymer {

  /**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   */
  class DomModule extends HTMLElement {
    attributeChangedCallback(name: any, old: any, value: any): any;

    /**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     *
     * @param id The id at which to register the dom-module.
     */
    register(id?: string): any;
  }
}

interface HTMLElementTagNameMap {
  "dom-module": Polymer.DomModule;
}
