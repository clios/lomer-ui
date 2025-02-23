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
    actions: ['escapeKey', 'focusTrap']
  },
  {
    name: 'drawer',
    dependencies: ['button'],
    actions: ['escapeKey', 'focusTrap']
  },
  {
    name: 'dropdown',
    dependencies: ['dropdown-item'],
    actions: ['escapeKey', 'outsideClick', 'focusTrap', 'verticalNavigation']
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
    dependencies: [
      'table-head',
      'table-body',
      'table-row',
      'table-header',
      'table-data'
    ],
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
    dependencies: ['tabs-item'],
    actions: []
  },
  {
    name: 'tabs-item',
    dependencies: [],
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
  }
];
