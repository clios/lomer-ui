export const COMPONENTS = [
    {
        name: 'accordion',
        dependencies: [],
        actions: []
    },
    {
        name: 'alert',
        dependencies: ['button'],
        actions: []
    },
    {
        name: 'avatar',
        dependencies: [],
        actions: []
    },
    {
        name: 'button',
        dependencies: [],
        actions: []
    },
    {
        name: 'checkbox',
        dependencies: [],
        actions: []
    },
    {
        name: 'collapsible',
        dependencies: [],
        actions: []
    },
    {
        name: 'dialog',
        dependencies: ['button'],
        actions: ['escape-key', 'focus-trap']
    },
    {
        name: 'drawer',
        dependencies: ['button'],
        actions: ['escape-key', 'focus-trap']
    },
    {
        name: 'dropdown',
        dependencies: ['dropdown-item'],
        actions: ['escape-key', 'outside-click', 'focus-trap', 'vertical-navigation']
    },
    {
        name: 'dropdown-item',
        dependencies: [],
        actions: []
    },
    {
        name: 'dropdown-switch',
        dependencies: [],
        actions: []
    },
    {
        name: 'field',
        dependencies: [],
        actions: []
    },
    {
        name: 'input',
        dependencies: [],
        actions: []
    },
    {
        name: 'link',
        dependencies: [],
        actions: []
    },
    {
        name: 'link-button',
        dependencies: ['link', 'button'],
        actions: []
    },
    {
        name: 'radio',
        dependencies: [],
        actions: []
    },
    {
        name: 'scroll-area',
        dependencies: [],
        actions: []
    },
    {
        name: 'select',
        dependencies: [],
        actions: []
    },
    {
        name: 'switch',
        dependencies: [],
        actions: []
    },
    {
        name: 'table',
        dependencies: ['table-head', 'table-body', 'table-row', 'table-header', 'table-data'],
        actions: []
    },
    {
        name: 'table-head',
        dependencies: [],
        actions: []
    },
    {
        name: 'table-body',
        dependencies: [],
        actions: []
    },
    {
        name: 'table-row',
        dependencies: [],
        actions: []
    },
    {
        name: 'table-header',
        dependencies: [],
        actions: []
    },
    {
        name: 'table-data',
        dependencies: [],
        actions: []
    },
    {
        name: 'tabs',
        dependencies: ['button', 'tabs-item'],
        actions: []
    },
    {
        name: 'tabs-item',
        dependencies: ['button'],
        actions: []
    },
    {
        name: 'tabs-content',
        dependencies: [],
        actions: []
    },
    {
        name: 'textarea',
        dependencies: [],
        actions: []
    },
    // WRAPPERS
    {
        name: 'map.mapbox-gl',
        dependencies: [],
        actions: []
    }
];
