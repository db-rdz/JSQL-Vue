# JSQL-Vue
A graphical interface to the JSQL tool.

## Dependencies

This package requries semantics-ui. Be sure to have semantics-ui installed before using this component.

## Installation
Install the jsql smarttable package:
```
npm install --save jsql-smarttable-vue
```
Then include jsql in your vue components:
```
  .
  .
  .
  <script>
    import SmartTable from 'jsql-smarttable-vue';
    export default {
      name: 'HelloWorld',
      components: { SmartTable },
      .
      .
      .
    }
  </script>
  .
  .
  .
```

After this you should be able to use the jsql component on your template sections.

## SmartTable Parameters

You can pass data to the smart table component when you create it. The following lists all props that can be passed to the SmartTable component:

All table data is passed to the SmartTable component through the tableArgs prop. This prop must be an object containing the table information. The following example contains all keys that can be included in the tableArgs prop:


```
<smart-table :tableArgs="{
  name: 'List of People',
  columns: [
    { name: 'First Name', type: 'String' },
    { name: 'Last Name', type: 'String' },
    { name: 'Age', type: 'Number' },
  ],
  rows: [
    [ 'Daniel', 'Rodriguez', '20' ],
    [ 'Raul', 'Rodriguez', '23' ],
    [ 'Benjamin', 'Rodriguez', '23' ],
    [ 'Benjamin Jr.', 'Rodriguez', '23' ],
  ],
  filters: [
    {
      targetColumn: 'First Name',
      filterFunction: 'equals',
      parameters: 'Daniel',
      status: true,
      tag: 'Filter Where Name is Daniel',
    },
    {
      targetColumn: 'Age',
      filterFunction: 'inBetween',
      parameters: [18, 25],
      status: true,
      tag: 'Filter Where Age is In Between 18 and 25',
    },
    options: {
      allowCellEditing: true,
      allowCellAdding: true,
      allowColumnAdding: true,
      allowColumnRemoving: true,
      allowRowAdding: true,
      allowRowRemoving: true,
      allowTableSearching: true,
      allowColumnSearching: true,
      allowFilterCreation: true,
      allowFilterDeletion: true,
      this.options.allowFiltering: true,
      addRowButtonHandler: function() {
        // Choose what happens when user presses the add row menu item.
      },
      removeRowButtonHandler: function() {
        // Choose what happens when user clicks the "Deleted Selected" button to delete rows.
      },
      addColumnButtonHandler: function() {
        // Choose what happens when user clicks on the add column menu item.
      },
      removeColumnButtonHandler: function() {
        // Choose what happens when user clicks the "Deleted Selected" button to delete columns.
      },
    }
  ]
}">

```

## NOTE
This component is in a beta state and is not ready for production.

## License

MIT



## Examples

