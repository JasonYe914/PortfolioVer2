import './RoadMap.css';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls } from "@xyflow/react";
import { useState, useCallback } from "react";
import '@xyflow/react/dist/style.css';
import SideBar from "./SideBar.jsx";

const nodeDetails = {
    n1:  { title: 'Intro to Python',
        desc: 'My first exposure to programming — learned fundamental concepets like ' +
            'variables, loops, and functions through a high school course.',
        skills: [
            {name: "Python", color: "#ED8B00", text: "#fff"}
        ],
        image: null },
    n2:  { title: 'TurtleMe Comic',
        desc: 'Used Python\'s Turtle library to draw a comic strip programmatically. First real project.',
        skills: [{name: "TurtleMe", color: "F7DF1E", text: "#000"}],
        image: null },
    n3:  { title: 'Intro to Java',
        desc: 'Second high school CS course — picked up Java fundamentals as well as ' +
            'OOP concepts like classes, inheritance, and interfaces. Built multiple games using Greenfoot IDE that combine all ' +
            'the concepts taught.',
        skills: [
            {name: "Java", color: "#ED8B00", text: "#fff"},
            {name: "OOP", color: '#f0f0f0', text: "#111"},
        ],
        image: null },
    n4:  { title: 'Comic Project',
        desc: 'Expanded the Turtle comic into a fuller project with multiple scenes and characters.',
        image: null },
    n5:  { title: 'Hackathons',
        desc: 'Started competing in hackathons to build real projects under time pressure. ' +
            'Loved attending them because of the ' +
            'opportunity to meet new and liked-minded people, ' +
            'had an amazing experience working with others to ' +
            'build something cool! The free food was a plus too.',
        image: null },
    n6:  { title: 'Personal Projects',
        desc: 'Self-driven projects built outside of school to explore new technologies. ' +
            'These mainly consists of passion projects and anything I find interesting. I definitely learnt a lot from building stuff.',
        image: null },
    n7:  { title: 'Experience',
        desc: 'Professional software engineering experience gained through internships.',
        image: null },
    n8:  { title: 'uOttaHacks',
        desc: 'First hackathon I attended hosted by UottaHacks 8. Amazing event, I met so many cool people and saw so many projects. ' +
            'The food there was also amazing.',
        image: null },
    n9:  { title: 'QHacks',
        desc: 'Second hackathon I attended host by Qhacks at Queens University. Another amazing event hosted.',
        image: null },
    n10: { title: 'Playtoon It Inc',
        desc: 'Full-Stack SWE Intern — ' + 'First internship ever working @ Playtoon It inc.' +
            'For one of my tasks I built an autosave system with Redux Toolkit and RESTful API ' +
            'endpoints with Express.js and PostgreSQL. I learnt a lot from this internship from new tools to version control and most importantly my soft/interpersonal skills.',
        skills: [
            { name: "Express.js", color: "#404040", text: "#fff" },
            { name: "React.js", color: "#61DAFB", text: "#000" },
            { name: "PostgreSQL", color: "#336791", text: "#fff" },
            { name: "Full-Stack Dev", color: "#f0f0f0", text: "#111" },
            { name: "RESTful API", color: "#f0f0f0", text: "#111" },
            { name: "HTML", color: "#E34F26", text: "#fff" },
            { name: "CSS", color: "#1572B6", text: "#fff" },
            { name: "Git", color: "#F05032", text: "#fff" },
            { name: "Version Control", color: "#f0f0f0", text: "#111" },
        ],
        image: null },
    n11: { title: 'Solitaire Game',
        desc: 'Built a fully functional Solitaire game in Python — ' +
            'first large solo project. Learnt a lot about Object Oriented Programming and how concepts like inheritance and dependency injection is used.',
        skills: [
            { name: "OOP", color: "#f0f0f0", text: "#111" },
            { name: "Java", color: "#ED8B00", text: "#fff" },
        ],
        image: null },
    n12: { title: 'Maze Generator & Solver',
        desc: 'Generated random mazes using recursive backtracking and solved them with BFS/DFS.',
        skills: [
            { name: "Java", color: "#ED8B00", text: "#fff" },
            { name: "OOP", color: "#f0f0f0", text: "#111" },
            { name: "DSA", color: "#f0f0f0", text: "#111" },
            {name: "Java Swing", color: "#f0f0f0", text: "#fff"}
        ],
        image: null },
    n13: { title: 'Automated Flappy Bird',
        desc: 'Used a neural network / genetic algorithm to train an AI agent to play Flappy Bird autonomously.',
        skills: [
            { name: "Java", color: "#ED8B00", text: "#fff" },
            { name: "OOP", color: "#f0f0f0", text: "#111" },
            { name: "DSA", color: "#f0f0f0", text: "#111" },
            {name: "Java Swing", color: "#f0f0f0", text: "#fff"}
        ],
        image: null },
    n14: { title: 'Valorant Team Selector',
        desc: 'Full-stack app with React frontend and Spring Boot + PostgreSQL backend using MVC architecture.',
        skills: [
            { name: "Java", color: "#ED8B00", text: "#fff" },
            { name: "Spring Boot", color: "#6DB33F", text: "#fff" },
            { name: "React.js", color: "#61DAFB", text: "#000" },
            { name: "OOP", color: "#f0f0f0", text: "#111" },
            { name: "Version Control", color: "#f0f0f0", text: "#111" },
            { name: "PostgreSQL", color: "#336791", text: "#fff" },
            { name: "HTML", color: "#E34F26", text: "#fff" },
            { name: "CSS", color: "#1572B6", text: "#fff" },
        ],
        image: null },
    n15: { title: 'Personal Portfolio v1',
        desc: 'First iteration of my personal portfolio website.',
        skills: [
            { name: "React.js", color: "#61DAFB", text: "#000" },
            { name: "Version Control", color: "#f0f0f0", text: "#111" },
            { name: "HTML", color: "#E34F26", text: "#fff" },
            { name: "CSS", color: "#1572B6", text: "#fff" },
        ],
        image: null },
    n16: { title: 'Desmos Replica',
        desc: 'Built a graphing calculator that renders mathematical equations visually, inspired by Desmos.',
        skills: [
            { name: "React.js", color: "#61DAFB", text: "#000" },
            { name: "Version Control", color: "#f0f0f0", text: "#111" },
            { name: "HTML", color: "#E34F26", text: "#fff" },
            { name: "CSS", color: "#1572B6", text: "#fff" },
            { name: "JavaScript", color: "#F7DF1E", text: "#000" },
        ],
        image: null },
    n17: { title: 'Neural Network',
        desc: 'Built a neural network from scratch with NumPy — trained on 10,000+ handwritten digit images with 95%+ accuracy.',
        skills: [
            { name: "Python", color: "#3776AB", text: "#fff" },
            { name: "Java", color: "#ED8B00", text: "#fff" },
            { name: "Git", color: "#F05032", text: "#fff" },
        ],
        image: null },
    n18: { title: 'AI Interview Prep Tool',
        desc: 'Built the AI-Interview Prep Tool at uOttaHacks — to help improve candidates on behavioural interviews. ' +
            'The tool prompts the user to input a Company name and job description and from these inputs Gemini generates 3-5 behvourial based questions.' +
            'The user can then record themselves answering them and that recording is analyzed to provide feedback. Tools like OpenCV, AssemblyAI, Gemini, and ElevenLabs were used for the analysis.',
        skills: [
            {name: "React", color: "#61DAFB", text: "#000"},
            {name: "Python", color: "#3776AB", text: "#fff" },
            {name: "Flask", color: "#000000", text: "#fff" },
            {name: "Gemini API", color: "#8E75B2", text: "#fff" },
            {name: "ElevenLabs", color: "#111", text: "#fff" },
            {name: "AssemblyAI", color: '#111', text: "#000"},
            { name: "Full-Stack Dev", color: "#f0f0f0", text: "#111" },
            { name: "GenAI", color: "#f0f0f0", text: "#111" },
            { name: "HTML", color: "#E34F26", text: "#fff" },
            { name: "CSS", color: "#1572B6", text: "#fff" },
        ],
        image: null },
    n19: { title: 'Wayfinder',
        desc: 'Built Wayfinder at QHacks — an AI-powered learning roadmap generator leveraging Google Gemini. ' +
            'A user is prompted to inout a goal and using gemini a road map is created. Each node represents a skill that is needed to reach your end goal, ' +
            'And some nodes are locked until you complete the prerequisite node.',
        skills: [
            { name: "React.js", color: "#61DAFB", text: "#000" },
            {name: "Python", color: "#3776AB", text: "#fff" },
            {name: "Flask", color: "#000000", text: "#fff" },
            {name: "Gemini API", color: "#8E75B2", text: "#fff" },
            { name: "Git", color: "#F05032", text: "#fff" },
        ],
        image: null },
};

export default function RoadMap() {
    const initialNodes = [
        { id: 'n1',  position: { x: 650,  y: 100  }, data: { label: 'High School Course: Introduction to Python' } },
        { id: 'n2',  position: { x: 450,  y: 250  }, data: { label: 'Created a comic using TurtleMe' } },
        { id: 'n3',  position: { x: 850,  y: 250  }, data: { label: 'High School Course: Introduction to Java' } },
        { id: 'n4',  position: { x: 300,  y: 350  }, data: { label: 'Comic Project' } },
        { id: 'n5',  position: { x: 650,  y: 400  }, data: { label: 'Hackathons' } },
        { id: 'n6',  position: { x: 850,  y: 400  }, data: { label: 'Personal Projects' } },
        { id: 'n7',  position: { x: 1050, y: 400  }, data: { label: 'Experience' } },
        { id: 'n8',  position: { x: 450,  y: 500  }, data: { label: 'UottaHacks' } },
        { id: 'n9',  position: { x: 650,  y: 500  }, data: { label: 'QHacks' } },
        { id: 'n10', position: { x: 1250, y: 500  }, data: { label: 'Full Stack Software Engineer @ Playtoon it' } },
        { id: 'n11', position: { x: 850,  y: 500  }, data: { label: 'Solitaire Game' } },
        { id: 'n12', position: { x: 850,  y: 600  }, data: { label: 'Maze Generator and Solver' } },
        { id: 'n13', position: { x: 850,  y: 700  }, data: { label: 'Automated Flappy Bird Simulation' } },
        { id: 'n14', position: { x: 850,  y: 800  }, data: { label: 'Valorant Team Selector' } },
        { id: 'n15', position: { x: 850,  y: 900  }, data: { label: 'Personal Portfolio Ver:1' } },
        { id: 'n16', position: { x: 850,  y: 1000 }, data: { label: 'Desmos Replica' } },
        { id: 'n17', position: { x: 850,  y: 1100 }, data: { label: 'Neural Network' } },
        { id: 'n18', position: { x: 450,  y: 600  }, data: { label: 'AI-Interview Prep Tool' } },
        { id: 'n19', position: { x: 650,  y: 600  }, data: { label: 'Wayfinder' } },
    ];

    const initialEdges = [
        { id: 'n1-n2',   source: 'n1',  target: 'n2'  },
        { id: 'n1-n3',   source: 'n1',  target: 'n3'  },
        { id: 'n2-n4',   source: 'n2',  target: 'n4'  },
        { id: 'n3-n5',   source: 'n3',  target: 'n5'  },
        { id: 'n3-n6',   source: 'n3',  target: 'n6'  },
        { id: 'n3-n7',   source: 'n3',  target: 'n7'  },
        { id: 'n5-n8',   source: 'n5',  target: 'n8'  },
        { id: 'n5-n9',   source: 'n5',  target: 'n9'  },
        { id: 'n7-n10',  source: 'n7',  target: 'n10' },
        { id: 'n6-n11',  source: 'n6',  target: 'n11' },
        { id: 'n11-n12', source: 'n11', target: 'n12' },
        { id: 'n12-n13', source: 'n12', target: 'n13' },
        { id: 'n13-n14', source: 'n13', target: 'n14' },
        { id: 'n14-n15', source: 'n14', target: 'n15' },
        { id: 'n15-n16', source: 'n15', target: 'n16' },
        { id: 'n16-n17', source: 'n16', target: 'n17' },
        { id: 'n9-n19',  source: 'n9',  target: 'n19' },
        { id: 'n8-n18',  source: 'n8',  target: 'n18' },
    ];

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []
    );
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)), []
    );

    const onNodeClick = useCallback((event, node) => {
        setSelectedNode(nodeDetails[node.id] ?? null);
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <ReactFlow
                className="react-flow"
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
            >
                <Background />
                <Controls className="control-buttons" />
            </ReactFlow>

            <SideBar node={selectedNode} onClose={() => setSelectedNode(null)} />
        </div>
    );
}