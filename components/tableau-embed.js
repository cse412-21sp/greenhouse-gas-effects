const React = require('react');

class TableauEmbed extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="aligned">
      <iframe
        src={this.props.link + ':showVizHome=no&:embed=true'}
        width={this.props.width}
        height={this.props.height}
      />
      </div>
    );
  }
}

module.exports = TableauEmbed;
