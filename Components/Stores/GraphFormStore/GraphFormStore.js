const store = {
  namespaced: true,
  state: {
    graph: {
      options: {
        legend: true,
        title: {
          display: true,
          text: '',
        },
      },
      graphType: '',
      dataGrouper: {
        groupingType: '',
        targetColumn: '',
        yAxisList: [
          {
            dataAction: {
              actionType: '',
              targetColumnList: [],
              color: '',
            },
            label: '',
            color: '',
          },
        ],
      },
    },
  },
  getters: {
    getGraph: state => state.graph,
  },
};

export default store;
