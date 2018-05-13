/* global $ */
const GraphFormValidator = {
  mounted() {
    $('.ui.form').form({
      fields: {
        title: {
          identifier: 'title',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter a title for the graph',
            },
          ],
        },
        xAxisTargetColumn: {
          identifier: 'xAxisTargetColumn',
          rules: [
            {
              type: 'empty',
              prompt: 'Please choose a column for your x-axis',
            },
          ],
        },
        xAxisGroupingFunction: {
          identifier: 'xAxisGroupingFunction',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select a grouping function.',
            },
          ],
        },
        yAxisLabel: {
          identifier: 'yAxisLabel',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select a grouping function.',
            },
          ],
        },
        yAxisTargetColumn: {
          identifier: 'yAxisTargetColumn',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select a grouping function.',
            },
          ],
        },
        yAxisDataAction: {
          identifier: 'yAxisDataAction',
          rules: [
            {
              type: 'empty',
              prompt: 'Please select a grouping function.',
            },
          ],
        },
      },
    });
  },
};

export default GraphFormValidator;
