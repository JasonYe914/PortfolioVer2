import './RoadMap.css';
import {ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls} from "@xyflow/react";
import {useState, useCallback} from "react";
import '@xyflow/react/dist/style.css';
import SideBar from "./SideBar.jsx";

//TODO: Find a way to implement a sidebar
export default function RoadMap(){
    const initialNodes = [
        {id : 'n1', position: {x:650, y:250}, data:{label:'High School Course: Introduction to Python'}},
        {id: 'n2', position: {x:450, y:350}, data:{label:'Created a comic using TurtleMe'}},
        {id: 'n3', position: {x:850, y:350}, data:{label:'High School Course: Introduction to Java'}},
        {id: 'n4', position: {x:300, y: 450}, data:{label: 'Comic Project'}}
    ];

    const initialEdges = [
        {id: 'n1-n2', source: 'n1', target: 'n2'},
        {id: 'n1-n3', source: 'n1', target: 'n3'},
        {id: 'n2-n4', source: 'n2', target: 'n4'}

    ];

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    const handleClick = (id) =>{
        return(
            <SideBar key={id}/>
        )
    }
    //initialNode.id pass that in when that node is clicked into sidebar.jsx
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <ReactFlow
                className="react-flow"
                nodes={nodes}
                edges={edges}
                onNodesChange = {onNodesChange}
                onEdgesChanged = {onEdgesChange}
                onConnect = {onConnect}
                onClick={() => handleClick(initialEdges.id)}
            >
                <Background />
                <Controls
                    className="control-buttons"
                />
            </ReactFlow>
        </div>
    )
}