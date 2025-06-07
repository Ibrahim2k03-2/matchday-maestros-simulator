
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Heart, 
  Clock,
  Search,
  Filter
} from "lucide-react";

const PlayerManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [positionFilter, setPositionFilter] = useState("all");

  const players = [
    {
      id: 1,
      name: "Marcus Rashford",
      position: "LW",
      age: 26,
      nationality: "England",
      overall: 86,
      potential: 90,
      value: "£85M",
      wage: "£300K/w",
      contract: "2028",
      morale: 85,
      fitness: 92,
      form: "Excellent",
      attributes: {
        pace: 89,
        shooting: 84,
        passing: 78,
        defending: 42,
        dribbling: 86,
        physical: 81
      }
    },
    {
      id: 2,
      name: "Bruno Fernandes",
      position: "CAM",
      age: 29,
      nationality: "Portugal",
      overall: 88,
      potential: 88,
      value: "£75M",
      wage: "£280K/w",
      contract: "2026",
      morale: 78,
      fitness: 89,
      form: "Good",
      attributes: {
        pace: 68,
        shooting: 85,
        passing: 92,
        defending: 65,
        dribbling: 83,
        physical: 75
      }
    },
    {
      id: 3,
      name: "Casemiro",
      position: "CDM",
      age: 31,
      nationality: "Brazil",
      overall: 85,
      potential: 85,
      value: "£45M",
      wage: "£320K/w",
      contract: "2025",
      morale: 82,
      fitness: 85,
      form: "Average",
      attributes: {
        pace: 62,
        shooting: 72,
        passing: 83,
        defending: 91,
        dribbling: 74,
        physical: 89
      }
    },
    {
      id: 4,
      name: "Alejandro Garnacho",
      position: "RW",
      age: 19,
      nationality: "Argentina",
      overall: 76,
      potential: 91,
      value: "£35M",
      wage: "£50K/w",
      contract: "2027",
      morale: 90,
      fitness: 95,
      form: "Excellent",
      attributes: {
        pace: 91,
        shooting: 74,
        passing: 72,
        defending: 38,
        dribbling: 85,
        physical: 69
      }
    }
  ];

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === "all" || player.position === positionFilter;
    return matchesSearch && matchesPosition;
  });

  const getFormColor = (form: string) => {
    switch (form) {
      case "Excellent": return "text-green-400";
      case "Good": return "text-blue-400";
      case "Average": return "text-yellow-400";
      case "Poor": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Squad Overview */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="h-5 w-5 mr-2 text-green-400" />
            Squad Management
          </CardTitle>
          <CardDescription className="text-green-400">
            Manage your players, contracts, and development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-white">25</p>
              <p className="text-sm text-gray-400">Squad Size</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">84.2</p>
              <p className="text-sm text-gray-400">Avg Rating</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-400">£425M</p>
              <p className="text-sm text-gray-400">Squad Value</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-yellow-400">£2.1M</p>
              <p className="text-sm text-gray-400">Weekly Wages</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-700/50 border-green-500/20 text-white placeholder:text-gray-400"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-full md:w-[180px] bg-slate-700/50 border-green-500/20 text-white">
                <SelectValue placeholder="Filter by position" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-green-500/20">
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="GK">Goalkeeper</SelectItem>
                <SelectItem value="CB">Centre Back</SelectItem>
                <SelectItem value="LB">Left Back</SelectItem>
                <SelectItem value="RB">Right Back</SelectItem>
                <SelectItem value="CDM">Defensive Mid</SelectItem>
                <SelectItem value="CM">Central Mid</SelectItem>
                <SelectItem value="CAM">Attacking Mid</SelectItem>
                <SelectItem value="LW">Left Wing</SelectItem>
                <SelectItem value="RW">Right Wing</SelectItem>
                <SelectItem value="ST">Striker</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Player List */}
      <div className="grid gap-4">
        {filteredPlayers.map((player) => (
          <Card key={player.id} className="bg-slate-800/50 border-green-500/20 hover:border-green-400/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Player Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`/placeholder.svg`} />
                    <AvatarFallback className="bg-green-600 text-white font-semibold">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{player.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        {player.position}
                      </Badge>
                      <span>Age {player.age}</span>
                      <span>•</span>
                      <span>{player.nationality}</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-1 text-sm">
                      <span className="text-white">OVR: <span className="font-semibold text-green-400">{player.overall}</span></span>
                      <span className="text-white">POT: <span className="font-semibold text-blue-400">{player.potential}</span></span>
                      <span className={`font-semibold ${getFormColor(player.form)}`}>
                        Form: {player.form}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Attributes */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center">
                  {Object.entries(player.attributes).map(([attr, value]) => (
                    <div key={attr} className="bg-slate-700/30 p-2 rounded">
                      <p className="text-xs text-gray-400 capitalize">{attr}</p>
                      <p className="text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Status Bars */}
                <div className="space-y-2 min-w-[200px]">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Morale</span>
                      <span className="text-white">{player.morale}%</span>
                    </div>
                    <Progress value={player.morale} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Fitness</span>
                      <span className="text-white">{player.fitness}%</span>
                    </div>
                    <Progress value={player.fitness} className="h-2" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Value: <span className="text-green-400">{player.value}</span></span>
                    <span>Wage: <span className="text-yellow-400">{player.wage}</span></span>
                  </div>
                  <div className="text-xs text-gray-400 text-center">
                    Contract until {player.contract}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                    Contract
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlayerManagement;
