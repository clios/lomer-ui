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
    actions: ['escapeKey', 'outsideClick', 'focusTrap']
  },
  {
    name: 'dropdown-item',
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
  // TODO: Mirgate components
  {
    name: 'spinner',
    dependencies: [],
    actions: []
  },
  {
    name: 'switch',
    dependencies: [],
    actions: []
  },
  {
    name: 'textarea',
    dependencies: [],
    actions: []
  }
];
