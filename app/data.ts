import {
    Cpu, Shield, Settings, Zap, HardDrive, Wifi, Activity,
    Share2, Layers, CheckCircle, Search, Server, Monitor,
    Route, Radio, Lock, Target, TrendingUp, AlertTriangle,
    PenTool, Factory, Battery, Eye, Globe, Database,
    Cloud, Smartphone, Train, MapPin, Sliders, Wrench,
    CheckSquare, ShieldCheck, Box, Network, HeartPulse
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ==========================================
// 1. TYPE DEFINITIONS (INTERFACES)
// ==========================================

export interface FeatureItem {
    text: string;
    icon: LucideIcon;
}

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    keyFeatures: FeatureItem[];
    image: string;
}

export interface Solution {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    features: FeatureItem[];
    keyBenefits: FeatureItem[];
    whyBrihaspathiRail: FeatureItem[];
    compliance: string[];
    image: string;
}

export interface Product {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    capabilities: FeatureItem[];
    applications: FeatureItem[];
    technicalSpecs: {
        label: string;
        value: string;
    }[];
    whyBrihaspathiRail: FeatureItem[];
    image: string;
}

export interface SiteData {
    companyOverview: {
        tagline: string;
        mission: string;
        vision: string;
    };
    services: Service[];
    solutions: Solution[];
    products: Product[];
    banners: {
        solutionsHero: string;
        servicesHero: string;
        productsHero: string;
        aboutHero: string;
    };
}

// ==========================================
// 2. DATA: OUR SERVICES (Section 4)
// ==========================================

export const services: Service[] = [
    {
        id: "product-development",
        slug: "product-development",
        title: "Product Development",
        shortDescription: "Complete product development from concept to production.",
        fullDescription: "We offer end-to-end product development services tailored for the railway and transportation sectors. From initial concept and feasibility studies to detailed design, prototyping, and full-scale production, we ensure your product meets the highest industry standards.",
        icon: Factory,
        keyFeatures: [
            { text: "Conceptualization & Feasibility Studies", icon: Search },
            { text: "Rapid Prototyping", icon: Zap },
            { text: "Design for Manufacturing (DFM)", icon: Settings },
            { text: "Product Lifecycle Management", icon: Activity },
            { text: "Regulatory Compliance Support", icon: ShieldCheck },
        ],
        image: "/Our Services/Product Development.jpg",
    },
    {
        id: "system-engineering",
        slug: "system-engineering",
        title: "System Engineering",
        shortDescription: "System architecture, requirements engineering, interface definition and system integration.",
        fullDescription: "Our system engineering services provide a holistic approach to complex railway projects. We define robust architectures, manage intricate requirements, and ensure seamless integration of multi-disciplinary subsystems.",
        icon: Network,
        keyFeatures: [
            { text: "Requirements Engineering & Management", icon: CheckSquare },
            { text: "System Architecture Design", icon: Layers },
            { text: "Interface Control Definition", icon: Sliders },
            { text: "Subsystem Integration", icon: Share2 },
            { text: "Configuration Management", icon: Database },
        ],
        image: "/Our Services/System Engineering.jpg",
    },
    {
        id: "hardware-design",
        slug: "hardware-design",
        title: "Hardware Design",
        shortDescription: "Digital, analog, mixed-signal, power electronics, communication interfaces and safety-critical hardware development.",
        fullDescription: "We design and develop highly reliable hardware for harsh railway environments. Our expertise spans digital, analog, and mixed-signal circuits, power electronics, and safety-critical hardware compliant with rigorous railway standards.",
        icon: Cpu,
        keyFeatures: [
            { text: "Digital & Analog Circuit Design", icon: Activity },
            { text: "Mixed-Signal & Power Electronics", icon: Battery },
            { text: "Safety-Critical Hardware (SIL-4)", icon: Shield },
            { text: "EMC/EMI Compliance Design", icon: Radio },
            { text: "Ruggedized Environmental Hardening", icon: HardDrive },
        ],
        image: "/Our Services/Hardware Design.jpg",
    },
    {
        id: "embedded-software",
        slug: "embedded-software",
        title: "Embedded Software",
        shortDescription: "Development of real-time embedded software for railway and transportation applications.",
        fullDescription: "We develop robust, real-time embedded software that powers the brains of modern railway systems. Our software is designed for determinism, reliability, and strict adherence to safety standards like EN 50128.",
        icon: Monitor,
        keyFeatures: [
            { text: "Real-Time Operating Systems (RTOS)", icon: Activity },
            { text: "Safety-Critical Software (EN 50128)", icon: ShieldCheck },
            { text: "Device Drivers & BSP Development", icon: Settings },
            { text: "Communication Protocol Stacks", icon: Network },
            { text: "Over-the-Air (OTA) Update Support", icon: Cloud },
        ],
        image: "/Our Services/Embedded Software.jpg",
    },
    {
        id: "fpga-electronics",
        slug: "fpga-electronics-engineering",
        title: "FPGA & Electronics Engineering",
        shortDescription: "FPGA-based processing, high-speed interfaces, communication and control systems.",
        fullDescription: "Leveraging advanced FPGA technology, we deliver high-performance, low-latency processing solutions for complex railway control and communication systems requiring deterministic behavior.",
        icon: Zap,
        keyFeatures: [
            { text: "High-Speed Digital Design", icon: Zap },
            { text: "FPGA/SoC Development & Verification", icon: Cpu },
            { text: "Custom Communication Protocols", icon: Share2 },
            { text: "Hardware-in-the-Loop (HIL) Testing", icon: Monitor },
            { text: "Deterministic Control Systems", icon: Sliders },
        ],
        image: "/Our Services/FPGA & Electronics Engineering (2).jpg",
    },
    {
        id: "iot-connectivity",
        slug: "iot-connectivity",
        title: "IoT & Connectivity",
        shortDescription: "Connected devices, edge computing, data acquisition, remote monitoring and intelligent diagnostics.",
        fullDescription: "We bridge the physical and digital worlds by connecting railway assets. Our IoT solutions enable real-time data acquisition, edge computing, and cloud connectivity for predictive maintenance and operational intelligence.",
        icon: Wifi,
        keyFeatures: [
            { text: "Edge Computing & Data Aggregation", icon: Server },
            { text: "Secure Cloud Connectivity", icon: Cloud },
            { text: "Remote Asset Monitoring", icon: Eye },
            { text: "Intelligent Diagnostics", icon: Activity },
            { text: "Industrial IoT (IIoT) Protocols", icon: Radio },
        ],
        image: "/Our Services/IoT & Connectivity.jpg",
    },
    {
        id: "verification-validation",
        slug: "verification-validation",
        title: "Verification & Validation",
        shortDescription: "Comprehensive verification, validation and testing of hardware, software and complete systems.",
        fullDescription: "We ensure your systems perform flawlessly under all conditions. Our V&V services cover rigorous testing methodologies, from unit-level testing to full system-level validation in simulated and real-world environments.",
        icon: CheckSquare,
        keyFeatures: [
            { text: "Requirements Traceability", icon: Search },
            { text: "Hardware-in-the-Loop (HIL) Testing", icon: Monitor },
            { text: "Software Unit & Integration Testing", icon: Layers },
            { text: "Environmental & Stress Testing", icon: Activity },
            { text: "Independent Safety Assessment (ISA) Support", icon: ShieldCheck },
        ],
        image: "/Our Services/Verification & Validation.jpg",
    },
    {
        id: "safety-reliability",
        slug: "safety-reliability-engineering",
        title: "Safety & Reliability Engineering",
        shortDescription: "Engineering support for safety-critical railway products, including reliability and safety analysis.",
        fullDescription: "Safety is paramount in railway engineering. We provide expert guidance and execution of safety and reliability analyses to ensure your products meet stringent international railway safety standards.",
        icon: Shield,
        keyFeatures: [
            { text: "Hazard Analysis & Risk Assessment (HARA)", icon: AlertTriangle },
            { text: "SIL Allocation & Verification", icon: ShieldCheck },
            { text: "FMEA / FMECA / FTA Analysis", icon: Activity },
            { text: "RAMS Engineering", icon: Settings },
            { text: "Safety Case Development", icon: CheckCircle },
        ],
        image: "/Our Services/Safety & Reliability Engineering.jpg",
    },
    {
        id: "prototype-product",
        slug: "prototype-product-engineering",
        title: "Prototype & Product Engineering",
        shortDescription: "Rapid prototyping, engineering validation, design optimization and transition to production.",
        fullDescription: "We accelerate your time-to-market with rapid prototyping and engineering validation services. We optimize designs for manufacturability and seamlessly manage the transition from lab to mass production.",
        icon: Box,
        keyFeatures: [
            { text: "Rapid Prototyping & 3D Modeling", icon: PenTool },
            { text: "Design for Excellence (DfX)", icon: Target },
            { text: "Engineering Validation Testing (EVT)", icon: CheckSquare },
            { text: "Supply Chain & Vendor Management", icon: Globe },
            { text: "Production Ramp-up Support", icon: TrendingUp },
        ],
        image: "/Our Services/Prototype & Product Engineering.jpg",
    },
    {
        id: "system-integration",
        slug: "system-integration",
        title: "System Integration",
        shortDescription: "Integration of hardware, software, communication and field equipment into complete transportation solutions.",
        fullDescription: "We bring together diverse hardware, software, and field equipment into cohesive, fully functional transportation solutions, ensuring interoperability and optimal performance across the entire network.",
        icon: Share2,
        keyFeatures: [
            { text: "Multi-Vendor Subsystem Integration", icon: Layers },
            { text: "Interoperability Testing", icon: CheckCircle },
            { text: "Field Deployment & Commissioning", icon: Wrench },
            { text: "Network & Communication Integration", icon: Network },
            { text: "End-to-End System Validation", icon: ShieldCheck },
        ],
        image: "/Our Services/System Integration.jpg",
    },
];

// ==========================================
// 3. DATA: OUR SOLUTIONS (Section 5)
// ==========================================

export const solutions: Solution[] = [
    {
        id: "smart-signalling",
        slug: "smart-signalling",
        title: "SMART SIGNALLING",
        shortDescription: "Intelligent and safety-focused railway signalling technologies for modern networks.",
        fullDescription: "We develop intelligent and safety-focused railway signalling technologies for modern railway networks, ensuring maximum safety, capacity, and operational efficiency.",
        icon: Route,
        features: [
            { text: "Axle Counter Systems", icon: Activity },
            { text: "Axle Counter Monitoring Systems", icon: Monitor },
            { text: "Electronic Interlocking (EI)", icon: Network },
            { text: "Kavach / Automatic Train Protection Solutions", icon: Shield },
            { text: "FnMux – Failsafe Network Multiplexer", icon: Share2 },
            { text: "Non-Vital Multiplexer", icon: Layers },
            { text: "Railway signalling interface systems", icon: Sliders },
            { text: "Monitoring and diagnostic systems", icon: Search },
            { text: "Safety-critical embedded systems", icon: Cpu },
        ],
        keyBenefits: [
            { text: "Enhanced Train Safety", icon: ShieldCheck },
            { text: "Increased Network Capacity", icon: TrendingUp },
            { text: "Reduced Human Error", icon: AlertTriangle },
            { text: "Seamless Legacy System Integration", icon: Share2 },
        ],
        whyBrihaspathiRail: [
            { text: "Deep expertise in CENELEC safety standards (EN 50126/8/9).", icon: Shield },
            { text: "Proven track record in developing SIL-4 certified systems.", icon: CheckCircle },
            { text: "Indigenous development capabilities reducing dependency on imports.", icon: Factory },
            { text: "End-to-end lifecycle support from design to maintenance.", icon: Settings },
        ],
        compliance: ["EN 50126", "EN 50128", "EN 50129", "CMMI Level 3"],
        image: "/Railway solutions/Signalling.jpg",
    },
    {
        id: "iot-solutions",
        slug: "iot-solutions",
        title: "IoT SOLUTIONS",
        shortDescription: "Connect railway assets and infrastructure for real-time visibility and intelligent decision-making.",
        fullDescription: "We connect railway assets and infrastructure to enable real-time visibility, diagnostics, and intelligent decision-making. From field equipment to control centres, our IoT solutions transform railway infrastructure into connected, intelligent systems.",
        icon: Wifi,
        features: [
            { text: "Remote asset monitoring", icon: Eye },
            { text: "Condition monitoring", icon: Activity },
            { text: "Equipment health monitoring", icon: HeartPulse }, // Let's use Activity instead of HeartPulse if not imported
            { text: "Predictive maintenance", icon: Wrench },
            { text: "Sensor-based monitoring", icon: Radio },
            { text: "Data acquisition", icon: Database },
            { text: "Edge computing", icon: Server },
            { text: "Industrial communication", icon: Network },
            { text: "Cloud connectivity", icon: Cloud },
            { text: "Remote diagnostics", icon: Search },
            { text: "Asset analytics", icon: TrendingUp },
        ].map(f => f.icon === undefined ? { ...f, icon: Activity } : f), // Fallback map
        keyBenefits: [
            { text: "Reduced Downtime via Predictive Maintenance", icon: TrendingUp },
            { text: "Lower Lifecycle Costs", icon: Target },
            { text: "Real-Time Operational Visibility", icon: Eye },
            { text: "Data-Driven Decision Making", icon: Database },
        ],
        whyBrihaspathiRail: [
            { text: "Secure, railway-grade IoT architecture designed for harsh environments.", icon: Lock },
            { text: "Advanced AI/ML analytics for true predictive insights.", icon: Activity },
            { text: "Seamless integration with legacy SCADA and control systems.", icon: Share2 },
            { text: "Scalable cloud and edge computing infrastructure.", icon: Cloud },
        ],
        compliance: ["ISO 27001", "IEC 62443", "MQTT/CoAP Standards"],
        image: "/Railway solutions/Monitoring & Diagnostics.jpg",
    },
    {
        id: "intelligent-transport",
        slug: "intelligent-transport-solutions",
        title: "INTELLIGENT TRANSPORT SOLUTIONS",
        shortDescription: "Smart technologies for public transportation and passenger mobility.",
        fullDescription: "We develop smart technologies for public transportation and passenger mobility. Our intelligent transportation technologies aim to create a connected, informative, and efficient passenger experience while optimizing fleet operations.",
        icon: Train,
        features: [
            { text: "Smart Destination Boards", icon: Monitor },
            { text: "Intelligent Passenger Information Systems", icon: Smartphone },
            { text: "Smart Bus Technology", icon: Route },
            { text: "Connected Fleet Solutions", icon: Network },
            { text: "Vehicle Monitoring", icon: Eye },
            { text: "Passenger Information Systems", icon: Monitor },
            { text: "Real-time transportation information", icon: Activity },
            { text: "Fleet data and analytics", icon: Database },
        ],
        keyBenefits: [
            { text: "Improved Passenger Experience", icon: CheckCircle },
            { text: "Optimized Fleet Utilization", icon: TrendingUp },
            { text: "Real-Time Operational Analytics", icon: Activity },
            { text: "Enhanced Public Transit Appeal", icon: Target },
        ],
        whyBrihaspathiRail: [
            { text: "User-centric design focused on passenger convenience.", icon: Search },
            { text: "Robust hardware designed for 24/7 outdoor operation.", icon: HardDrive },
            { text: "Integration with city-wide smart mobility initiatives.", icon: Share2 },
            { text: "Cost-effective solutions for mass transit adoption.", icon: TrendingUp },
        ],
        compliance: ["ITS Standards", "NDAA Compliance", "WCAG Accessibility"],
        image: "/Railway solutions/Passenger & Transportation.jpg",
    },
];

// ==========================================
// 4. DATA: PRODUCTS & TECHNOLOGIES (Section 6)
// ==========================================

export const products: Product[] = [
    {
        id: "axle-counter-monitoring",
        slug: "axle-counter-monitoring-system",
        title: "Axle Counter Monitoring System",
        shortDescription: "Centralized monitoring and diagnostic solution for axle counter system health.",
        fullDescription: "A centralized monitoring and diagnostic solution designed to provide comprehensive visibility into axle counter system health, status, and operational conditions, ensuring uninterrupted train detection.",
        icon: Monitor,
        capabilities: [
            { text: "Real-time monitoring", icon: Eye },
            { text: "Equipment status visualization", icon: Monitor },
            { text: "Diagnostics", icon: Activity },
            { text: "Event and fault logging", icon: Database },
            { text: "Remote monitoring", icon: Wifi },
            { text: "Health monitoring", icon: Activity },
            { text: "Maintenance support", icon: Wrench },
        ],
        applications: [
            { text: "Mainline Railways", icon: Train },
            { text: "Metro & Urban Transit", icon: Route },
            { text: "Freight Corridors", icon: Network },
            { text: "Yard & Shunting Operations", icon: Layers },
        ],
        technicalSpecs: [
            { label: "Communication Protocol", value: "Modbus TCP/IP, SNMP" },
            { label: "Data Refresh Rate", value: "< 1 Second" },
            { label: "Storage Capacity", value: "10+ Years Event Logging" },
            { label: "Interface", value: "Web-based HMI / SCADA Integration" },
        ],
        whyBrihaspathiRail: [
            { text: "Proprietary algorithms for early fault detection.", icon: Search },
            { text: "Cybersecurity-hardened architecture.", icon: Lock },
            { text: "Minimal bandwidth requirements for remote sites.", icon: Wifi },
            { text: "Customizable alerting and reporting engines.", icon: Settings },
        ],
        image: "/Railway solutions/Monitoring & Diagnostics.jpg",
    },
    {
        id: "non-vital-multiplexer",
        slug: "non-vital-multiplexer",
        title: "Non-Vital Multiplexer",
        shortDescription: "Communication and data aggregation for efficient transmission of non-vital field information.",
        fullDescription: "A robust communication and data aggregation solution designed for the efficient, reliable transmission of non-vital railway field information, reducing cabling complexity and maintenance overhead.",
        icon: Layers,
        capabilities: [
            { text: "Railway signalling", icon: Route },
            { text: "Field status monitoring", icon: Eye },
            { text: "Equipment interfacing", icon: Share2 },
            { text: "Data aggregation", icon: Database },
            { text: "Remote monitoring", icon: Wifi },
        ],
        applications: [
            { text: "Signal Equipment Monitoring", icon: Activity },
            { text: "Point Machine Status", icon: CheckCircle },
            { text: "Level Crossing Interfaces", icon: Network },
            { text: "Wayside Data Collection", icon: Database },
        ],
        technicalSpecs: [
            { label: "Input Channels", value: "Configurable up to 64 Channels" },
            { label: "Isolation", value: "Optically Isolated Inputs/Outputs" },
            { label: "Power Supply", value: "24V DC / 110V DC Redundant" },
            { label: "MTBF", value: "> 100,000 Hours" },
        ],
        whyBrihaspathiRail: [
            { text: "Significant reduction in wayside cabling costs.", icon: TrendingUp },
            { text: "Modular design for easy expansion and maintenance.", icon: Layers },
            { text: "Ruggedized for extreme temperature and vibration.", icon: HardDrive },
            { text: "Plug-and-play compatibility with existing signalling assets.", icon: Zap },
        ],
        image: "/Railway solutions/Signalling.jpg",
    },
    {
        id: "fnmux",
        slug: "fnmux-failsafe-network-multiplexer",
        title: "FnMux – Failsafe Network Multiplexer",
        shortDescription: "Safety-oriented railway communication platform for critical field information.",
        fullDescription: "A safety-oriented railway communication and interfacing platform designed to efficiently interface and transmit critical field information across railway signalling networks with guaranteed failsafe behavior.",
        icon: Shield,
        capabilities: [
            { text: "Railway signalling", icon: Route },
            { text: "Field equipment interfacing", icon: Share2 },
            { text: "Vital/non-vital data interfaces", icon: Network },
            { text: "Distributed signalling architectures", icon: Layers },
            { text: "Safety-critical applications", icon: ShieldCheck },
        ],
        applications: [
            { text: "Vital Signalling Networks", icon: Shield },
            { text: "Distributed Interlocking Systems", icon: Network },
            { text: "Safety-Critical Data Transmission", icon: Lock },
            { text: "Redundant Communication Paths", icon: Share2 },
        ],
        technicalSpecs: [
            { label: "Safety Integrity Level", value: "SIL-4 Capable Architecture" },
            { label: "Redundancy", value: "Hot-Standby Dual Channel" },
            { label: "Transmission Safety", value: "Safe Communication Protocol (EN 50159)" },
            { label: "Diagnostics", value: "Continuous Self-Monitoring" },
        ],
        whyBrihaspathiRail: [
            { text: "Designed specifically for EN 50159 safety communication compliance.", icon: ShieldCheck },
            { text: "Eliminates single points of failure in critical networks.", icon: Target },
            { text: "Certifiable architecture for vital applications.", icon: CheckCircle },
            { text: "High-speed data throughput with deterministic latency.", icon: Zap },
        ],
        image: "/Railway solutions/Signalling.jpg",
    },
    {
        id: "axle-counter",
        slug: "axle-counter",
        title: "Axle Counter",
        shortDescription: "Advanced railway train detection technology for track occupancy and safe movement.",
        fullDescription: "Advanced railway train detection technology designed to accurately determine track occupancy and support safe, high-density train movement, serving as a reliable alternative to traditional track circuits.",
        icon: Target,
        capabilities: [
            { text: "Train detection", icon: Train },
            { text: "Track section monitoring", icon: Route },
            { text: "Wheel detection interfaces", icon: Search },
            { text: "Evaluation electronics", icon: Cpu },
            { text: "Diagnostic capabilities", icon: Activity },
            { text: "Safety-oriented architecture", icon: Shield },
        ],
        applications: [
            { text: "High-Speed Rail Lines", icon: Zap },
            { text: "Tunnel & Bridge Sections", icon: Route },
            { text: "Electrified Track Segments", icon: Zap },
            { text: "Complex Junction Monitoring", icon: Network },
        ],
        technicalSpecs: [
            { label: "Detection Principle", value: "Magnetic Wheel Sensing" },
            { label: "Safety Level", value: "SIL-4 (EN 50129)" },
            { label: "Max Speed", value: "Up to 500 km/h" },
            { label: "Cable Length", value: "Up to 10km between Head and Evaluator" },
        ],
        whyBrihaspathiRail: [
            { text: "Immune to rail contamination and ballast resistance issues.", icon: ShieldCheck },
            { text: "Lower maintenance costs compared to track circuits.", icon: TrendingUp },
            { text: "Precise train localization for CBTC integration.", icon: Target },
            { text: "Indigenous manufacturing ensuring supply chain security.", icon: Factory },
        ],
        image: "/Railway solutions/Train Detection.jpg",
    },
    {
        id: "kavach",
        slug: "kavach-atp",
        title: "Kavach",
        shortDescription: "Technologies for Kavach / Automatic Train Protection applications.",
        fullDescription: "Brihaspathi Rail is actively developing core technologies for Kavach / Automatic Train Protection (ATP) applications, supporting the national evolution of safer, more intelligent, and collision-free railway operations.",
        icon: ShieldCheck,
        capabilities: [
            { text: "Safety-critical electronics", icon: Cpu },
            { text: "Embedded systems", icon: Settings },
            { text: "Communication interfaces", icon: Network },
            { text: "Train-side systems", icon: Train },
            { text: "Station-side systems", icon: Server },
            { text: "Field interfaces", icon: Share2 },
            { text: "Diagnostics and monitoring", icon: Activity },
        ],
        applications: [
            { text: "Collision Avoidance", icon: AlertTriangle },
            { text: "Speed Enforcement", icon: Activity },
            { text: "Automatic Braking", icon: Zap },
            { text: "Train-to-Train Communication", icon: Radio },
        ],
        technicalSpecs: [
            { label: "Technology", value: "RFID + UHF Radio Communication" },
            { label: "Safety Integrity", value: "SIL-4" },
            { label: "Braking Interface", value: "Direct Emergency Brake Intervention" },
            { label: "Localization", value: "RFID Tag Based + Odometry" },
        ],
        whyBrihaspathiRail: [
            { text: "Pioneering indigenous ATP technology for Indian Railways.", icon: Target },
            { text: "Seamless interoperability with existing signalling infrastructure.", icon: Network },
            { text: "Robust performance in high-noise railway environments.", icon: HardDrive },
            { text: "Dedicated R&D focus on next-gen train protection.", icon: Search },
        ],
        image: "/Railway solutions/Train Protection.jpg",
    },
    {
        id: "electronic-interlocking",
        slug: "electronic-interlocking-ei",
        title: "Electronic Interlocking – EI",
        shortDescription: "Next-generation Electronic Interlocking technologies for modern railway signalling.",
        fullDescription: "We are developing next-generation Electronic Interlocking (EI) technologies for modern railway signalling, providing highly reliable, scalable, and maintainable route setting and train protection logic.",
        icon: Network,
        capabilities: [
            { text: "Safety-critical architecture", icon: Shield },
            { text: "Vital input/output interfaces", icon: Share2 },
            { text: "Interlocking logic", icon: Cpu },
            { text: "Communication interfaces", icon: Radio },
            { text: "Diagnostics", icon: Activity },
            { text: "Human-machine interfaces", icon: Monitor },
            { text: "System integration", icon: Layers },
            { text: "Verification and validation", icon: CheckSquare },
        ],
        applications: [
            { text: "Station Yard Control", icon: MapPin },
            { text: "Junction & Terminal Management", icon: Route },
            { text: "Metro Depot Interlocking", icon: Target },
            { text: "Mainline Route Optimization", icon: TrendingUp },
        ],
        technicalSpecs: [
            { label: "Logic Solver", value: "2oo3 or 3oo3 Voting Architecture" },
            { label: "Availability", value: "> 99.999%" },
            { label: "I/O Capacity", value: "Scalable up to 10,000+ Objects" },
            { label: "Standards", value: "EN 50128 / EN 50129 Compliant" },
        ],
        whyBrihaspathiRail: [
            { text: "Modern software-defined interlocking replacing legacy relay systems.", icon: Cpu },
            { text: "Remote monitoring and diagnostics capabilities.", icon: Wifi },
            { text: "Energy-efficient and space-saving designs.", icon: Zap },
            { text: "Future-ready for CBTC and ERTMS migration.", icon: Target },
        ],
        image: "/Railway solutions/Signalling.jpg",
    },
];

// ==========================================
// 5. COMBINED EXPORT
// ==========================================

export const siteData: SiteData = {
    companyOverview: {
        tagline: "Engineering the Future of Safe and Intelligent Railway Transportation",
        mission: "To deliver end-to-end, safety-critical engineering and technology solutions that modernize railway infrastructure, enhance passenger mobility, and ensure uncompromising reliability.",
        vision: "To be the global leader in indigenous railway signalling and intelligent transportation technologies, driving safety and efficiency for the next century of rail.",
    },
    services,
    solutions,
    products,
    banners: {
        solutionsHero: "/Railway solutions/shot-electric-train-railway.jpg",
        servicesHero: "/Our Services/System Integration.jpg",
        productsHero: "/Railway solutions/Train Detection.jpg",
        aboutHero: "/Railway solutions/shot-electric-train-railway.jpg",
    },
};

export default siteData;