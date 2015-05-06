
var CpuUsageChart = React.createClass({
  // Renders CPU usage percent
  render: function() {
    var data = this.props.data;
    var total = 100;
    var cpu = ['system','user','idle'].map(function(name) {
      return {
        'name': name,
        'value': data.map(function(d) {
          return {'time': d.time, 'y': d.system.cpu[name]};
        }),
      }
    });
    return (
      <ScalableChart title='CPU USAGE' ydomain={[0, total]} data={cpu}/>
    );
  }
});
