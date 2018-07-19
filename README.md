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

## SmartTable Data/Options

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
## Empty States

You can create empty states of your own to notify a user that the table has no rows or no columns. Here are some very basic examples:

```
<smart-table>
  <div slot="empty_columns_state"> You have no columns! </div>
  <div slot="empty_rows_state"> You have no rows! </div>
</smart-table>
```

Note: The empty_columns_state has preference over the empty_rows_state and the later won't show if empty_columns_state is showing.


## Roadmap
V1
[] Adding
  [x] Adding Columns
  [x] Adding Rows
  [x] Adding Filters // Have some issues
[] Deleting
  [] Deleting Columns
  [x] Deleting Rows
  [x] Deleting Filters
[] Editing
  [] Edit Table Title
  [x] Edit Cells // Have some issues
  [] Edit Columns
  [] Edit Filters
[] Filtering // Has some issues
[] Search
  [x] Search Table
  [] Search Columns
[] Custom Empty States
  [X] Empty Columns State
  [x] Empty Rows State
  [] Empty Filters State
  [] Empty Search Results State
[] Sortable Columns
[] Data Validation // Need to include custom Regex validation.

V2
[] Boolean Column Data Type
[] Link Column Data Type
[] Row/Column reordering

Future
[] Image Column Data Type
[] Data Graph Creation
[] Table Import/Export Options

## Images

![Alt text](images/table_1.PNG?raw=true "")
![Alt text](images/table_2.PNG?raw=true "")
![Alt text](images/table_3.PNG?raw=true "")
![Alt text](images/table_4.PNG?raw=true "")
![Alt text](images/table_5.PNG?raw=true "")
![Alt text](images/table_6.PNG?raw=true "")
![Alt text](images/table_7.PNG?raw=true "")



## NOTE
* This component is in a beta state and is not ready for production. *

## JSQL Core

The core of this component is written is pure javascript so that it could be used to write the same component in other frameworks like react or angular. If you are interested check out the core JSQL repo: 

https://github.com/db-rdz/JSQL

## License

MIT

## Examples

Example coming soon...

