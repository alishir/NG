import { 
    Sigma,
    LoadGEXF,
    Filter
} from 'react-sigma';
import React, { Component } from 'react';

class NarratorGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {selectedNode: null}
    }

    render() {
        return (
                <Sigma render="webgl" style={{width:"800px", height:"600px"}}
                    settings={{defaultEdgeType: "arrow"}}
                    onClickNode={ e => this.setState({selectedNode: e.data.node.id}) } 
                    onClickStage={ e => this.setState({selectedNode: null})} >
                    <LoadGEXF path={"/narrators.gexf"}>
                        <Filter neighborsOf={ this.state.selectedNode } />
                    </LoadGEXF>
                </Sigma>
        );
    }
}

export default NarratorGraph;