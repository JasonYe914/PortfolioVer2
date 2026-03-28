import './RoadMap.css';
import {ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls} from "@xyflow/react";
import {useState, useCallback} from "react";
import '@xyflow/react/dist/style.css';
import SideBar from "./SideBar.jsx";

//TODO: Find a way to implement a sidebar
export default function RoadMap(){
    const initialNodes = [
        {id : 'n1', position: {x:650, y:100}, data:{label:'High School Course: Introduction to Python'}},
        {id: 'n2', position: {x:450, y:250}, data:{label:'Created a comic using TurtleMe'}},
        {id: 'n3', position: {x:850, y:250}, data:{label:'High School Course: Introduction to Java'}},
        {id: 'n4', position: {x:300, y: 350}, data:{label: 'Comic Project'}},
        {id: 'n5', position: {x:650, y: 400}, data:{label: 'Hackthons'}},
        {id: 'n6', position: {x:850, y: 400}, data:{label: 'Personal Projects'}},
        {id: 'n7', position: {x:1050, y:400}, data:{label: 'Experience'}},
        {id: 'n8', position: {x:450, y:500}, data:{label: 'UottaHacks'}},
        {id: 'n9', position: {x:650, y: 500}, data:{label: 'QHacks'}},
        {id: "n10", position: {x:1250, y: 500}, data:{label: 'Full Stack Software Engineer @ Playtoon it'}},
        {id: 'n11', position: {x:850, y: 500}, data:{label: 'Solitare Game'}},
        {id: 'n12', position: {x:850, y: 600}, data:{label: "Maze Generator and Solver"}},
        {id: 'n13', position: {x:850, y: 700}, data:{label: "Automated Flappy Bird Simulation"}},
        {id: 'n14', position: {x:850, y: 800}, data:{label: "Valorant Team Selector"}},
        {id: 'n15', position: {x:850, y: 900}, data:{label: "Personal Profolio Ver:1"}},
        {id: 'n16', position: {x:850, y: 1000}, data:{label: "Desmos Replica"}},
        {id: 'n17', position: {x:850, y: 1100}, data:{label: "Neural Network"}},
        {id: 'n18', position: {x:450, y: 600}, data:{label: "AI-Interview Prep Tool"}},
        {id: 'n19', position: {x:650, y:600}, data:{label: "Wayfinder"}}
    ];

    const initialEdges = [
        {id: 'n1-n2', source: 'n1', target: 'n2'},
        {id: 'n1-n3', source: 'n1', target: 'n3'},
        {id: 'n2-n4', source: 'n2', target: 'n4'},
        {id: 'n3-n5', source: 'n3', target: 'n5'},
        {id: 'n3-n6', source: 'n3', target: 'n6'},
        {id: 'n3-n7', source: 'n3', target: 'n7'},
        {id: 'n5-n8', source: 'n5', target: 'n8'},
        {id: 'n5-n9', source: 'n5', target: 'n9'},
        {id: 'n7-n10', source: 'n7', target: 'n10'},
        {id: 'n6-n11', source: 'n6', target: 'n11'},
        {id: 'n11-n12', source: 'n11', target: 'n12'},
        {id: 'n12-n13', source: 'n12', target: 'n13'},
        {id: 'n13-n14', source: 'n13', target: 'n14'},
        {id: 'n14-n15', source: 'n14', target: 'n15'},
        {id: 'n15-n16', source: 'n15', target: 'n16'},
        {id: 'n16-n17', source: 'n16', target: 'n17'},
        {id: 'n9-n19', source: 'n9', target: 'n19'},
        {id: 'n8-n18', source: 'n8', target: 'n18'},
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