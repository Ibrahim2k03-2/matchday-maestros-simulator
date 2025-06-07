
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Shield, 
  Settings, 
  Save, 
  RotateCcw,
  Users,
  Target,
  TrendingUp,
  Activity
} from "lucide-react";

const TacticsBuilder = () => {
  const [formation, setFormation] = useState("4-2-3-1");
  const [mentality, setMentality] = useState([5]);
  const [tempo, setTempo] = useState([6]);
  const [width, setWidth] = useState([5]);
  const [pressing, setPressing] = useState([7]);

  const formations = [
    "4-4-2", "4-3-3", "4-2-3-1", "3-5-2", "5-3-2", "4-1-4-1", "3-4-3", "4-5-1"
  ];

  const tacticalInstructions = [
    { name: "High Defensive Line", enabled: true, description: "Push defenders higher up the pitch" },
    { name: "Offside Trap", enabled: false, description: "Coordinate defensive line to catch attackers offside" },
    { name: "Play Out of Defence", enabled: true, description: "Build play from the back with short passes" },
    { name: "Counter-Attack", enabled: false, description: "Quick transitions from defence to attack" },
    { name: "Wide Play", enabled: true, description: "Utilize the full width of the pitch" },
    { name: "Work Ball Into Box", enabled: false, description: "Avoid long shots, work ball into penalty area" }
  ];

  const playerRoles = {
    "4-2-3-1": [
      { position: "GK", player: "Andre Onana", role: "Goalkeeper", x: 50, y: 90 },
      { position: "LB", player: "Luke Shaw", role: "Full-Back", x: 15, y: 65 },
      { position: "CB", player: "Lisandro Martinez", role: "Centre-Back", x: 35, y: 70 },
      { position: "CB", player: "Raphael Varane", role: "Centre-Back", x: 65, y: 70 },
      { position: "RB", player: "Diogo Dalot", role: "Wing-Back", x: 85, y: 65 },
      { position: "CDM", player: "Casemiro", role: "Anchor Man", x: 35, y: 45 },
      { position: "CDM", player: "Mason Mount", role: "Box to Box", x: 65, y: 45 },
      { position: "LW", player: "Marcus Rashford", role: "Inside Forward", x: 20, y: 25 },
      { position: "CAM", player: "Bruno Fernandes", role: "Trequartista", x: 50, y: 30 },
      { position: "RW", player: "Alejandro Garnacho", role: "Winger", x: 80, y: 25 },
      { position: "ST", player: "Rasmus Hojlund", role: "Poacher", x: 50, y: 10 }
    ]
  };

  const teamInstructions = [
    { category: "In Possession", instructions: ["Short Passing", "Play Out of Defence", "Work Ball Into Box", "Low Crosses"] },
    { category: "In Transition", instructions: ["Counter-Press", "Counter-Attack", "Distribute to Centre-Backs", "Take Short Kicks"] },
    { category: "Out of Possession", instructions: ["Higher Line of Engagement", "Use Offside Trap", "Prevent Short GK Distribution", "Show Onto Weaker Foot"] }
  ];

  return (
    <div className="space-y-6">
      {/* Tactics Overview */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="h-5 w-5 mr-2 text-green-400" />
            Tactical Setup
          </CardTitle>
          <CardDescription className="text-green-400">
            Build and customize your team's playing style
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Formation Selection */}
            <div className="space-y-4">
              <div>
                <label className="text-white font-medium mb-2 block">Formation</label>
                <Select value={formation} onValueChange={setFormation}>
                  <SelectTrigger className="bg-slate-700/50 border-green-500/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-green-500/20">
                    {formations.map((form) => (
                      <SelectItem key={form} value={form}>{form}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tactical Sliders */}
              <div className="space-y-4">
                <div>
                  <label className="text-white font-medium mb-2 block">
                    Mentality: {mentality[0] > 6 ? 'Attacking' : mentality[0] < 4 ? 'Defensive' : 'Balanced'}
                  </label>
                  <Slider
                    value={mentality}
                    onValueChange={setMentality}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Defensive</span>
                    <span>Attacking</span>
                  </div>
                </div>

                <div>
                  <label className="text-white font-medium mb-2 block">
                    Tempo: {tempo[0] > 6 ? 'High' : tempo[0] < 4 ? 'Low' : 'Medium'}
                  </label>
                  <Slider
                    value={tempo}
                    onValueChange={setTempo}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Slow</span>
                    <span>Fast</span>
                  </div>
                </div>

                <div>
                  <label className="text-white font-medium mb-2 block">
                    Width: {width[0] > 6 ? 'Wide' : width[0] < 4 ? 'Narrow' : 'Balanced'}
                  </label>
                  <Slider
                    value={width}
                    onValueChange={setWidth}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Narrow</span>
                    <span>Wide</span>
                  </div>
                </div>

                <div>
                  <label className="text-white font-medium mb-2 block">
                    Pressing: {pressing[0] > 6 ? 'High' : pressing[0] < 4 ? 'Low' : 'Medium'}
                  </label>
                  <Slider
                    value={pressing}
                    onValueChange={setPressing}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Low Press</span>
                    <span>High Press</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation Pitch View */}
            <div className="bg-green-800/20 rounded-lg p-4 relative" style={{ aspectRatio: '1/1.4' }}>
              <div className="w-full h-full relative bg-green-700/30 rounded border-2 border-white/20">
                {/* Pitch markings */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 border-b-2 border-l-2 border-r-2 border-white/40"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-8 border-t-2 border-l-2 border-r-2 border-white/40"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/40"></div>
                
                {/* Players */}
                {playerRoles[formation]?.map((player, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${player.x}%`, top: `${player.y}%` }}
                  >
                    <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">
                      {player.player.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      <p className="font-semibold">{player.player}</p>
                      <p className="text-green-400">{player.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Formation: {formation}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {teamInstructions.map((category, index) => (
          <Card key={index} className="bg-slate-800/50 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.instructions.map((instruction, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <span className="text-white text-sm">{instruction}</span>
                    <Badge className="bg-green-600 text-white text-xs">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tactical Instructions */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Target className="h-5 w-5 mr-2 text-green-400" />
            Tactical Instructions
          </CardTitle>
          <CardDescription className="text-green-400">
            Fine-tune your team's behavior on the pitch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tacticalInstructions.map((instruction, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded">
                <div className={`w-4 h-4 rounded-full mt-0.5 ${instruction.enabled ? 'bg-green-600' : 'bg-gray-600'}`}></div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{instruction.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{instruction.description}</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className={instruction.enabled 
                    ? "text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900" 
                    : "text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-slate-900"
                  }
                >
                  {instruction.enabled ? 'On' : 'Off'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Save className="h-4 w-4 mr-2" />
          Save Tactics
        </Button>
        <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
          <Activity className="h-4 w-4 mr-2" />
          Test Formation
        </Button>
        <Button variant="outline" className="text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-slate-900">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Default
        </Button>
      </div>
    </div>
  );
};

export default TacticsBuilder;
