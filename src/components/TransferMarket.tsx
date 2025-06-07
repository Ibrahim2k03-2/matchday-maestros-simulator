
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  TrendingUp, 
  Search, 
  Filter, 
  Star, 
  Clock,
  Globe,
  Users,
  Trophy
} from "lucide-react";

const TransferMarket = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [positionFilter, setPositionFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const transferTargets = [
    {
      id: 1,
      name: "Jude Bellingham",
      age: 20,
      position: "CM",
      club: "Real Madrid",
      nationality: "England",
      value: "£180M",
      wage: "£400K/w",
      overall: 89,
      potential: 95,
      contract: "2029",
      status: "Available",
      interest: "High",
      scouted: true
    },
    {
      id: 2,
      name: "Pedri",
      age: 21,
      position: "CAM",
      club: "FC Barcelona",
      nationality: "Spain",
      value: "£120M",
      wage: "£200K/w",
      overall: 86,
      potential: 93,
      contract: "2026",
      status: "Interested",
      interest: "Medium",
      scouted: true
    },
    {
      id: 3,
      name: "Victor Osimhen",
      age: 25,
      position: "ST",
      club: "Galatasaray",
      nationality: "Nigeria",
      value: "£85M",
      wage: "£180K/w",
      overall: 88,
      potential: 90,
      contract: "2025",
      status: "Available",
      interest: "High",
      scouted: false
    },
    {
      id: 4,
      name: "Jamal Musiala",
      age: 21,
      position: "CAM",
      club: "Bayern Munich",
      nationality: "Germany",
      value: "£110M",
      wage: "£250K/w",
      overall: 87,
      potential: 94,
      contract: "2026",
      status: "Not Interested",
      interest: "Low",
      scouted: true
    }
  ];

  const recentTransfers = [
    {
      player: "Enzo Fernandez",
      from: "Benfica",
      to: "Chelsea",
      fee: "£106.8M",
      date: "Jan 2023"
    },
    {
      player: "Declan Rice",
      from: "West Ham",
      to: "Arsenal",
      fee: "£105M",
      date: "Jul 2023"
    },
    {
      player: "Moises Caicedo",
      from: "Brighton",
      to: "Chelsea",
      fee: "£115M",
      date: "Aug 2023"
    }
  ];

  const filteredTargets = transferTargets.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === "all" || player.position === positionFilter;
    const matchesPrice = priceFilter === "all" || 
      (priceFilter === "under50" && parseInt(player.value.replace(/[£M]/g, '')) < 50) ||
      (priceFilter === "50to100" && parseInt(player.value.replace(/[£M]/g, '')) >= 50 && parseInt(player.value.replace(/[£M]/g, '')) <= 100) ||
      (priceFilter === "over100" && parseInt(player.value.replace(/[£M]/g, '')) > 100);
    
    return matchesSearch && matchesPosition && matchesPrice;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "text-green-400 border-green-400";
      case "Interested": return "text-blue-400 border-blue-400";
      case "Not Interested": return "text-red-400 border-red-400";
      default: return "text-gray-400 border-gray-400";
    }
  };

  const getInterestColor = (interest: string) => {
    switch (interest) {
      case "High": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "Low": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Transfer Market Overview */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
            Transfer Market
          </CardTitle>
          <CardDescription className="text-green-400">
            Winter Transfer Window • 23 days remaining
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">£150M</p>
              <p className="text-sm text-gray-400">Transfer Budget</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-400">£2.5M</p>
              <p className="text-sm text-gray-400">Wage Budget</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-yellow-400">47</p>
              <p className="text-sm text-gray-400">Scouted Players</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-white">8</p>
              <p className="text-sm text-gray-400">Active Negotiations</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-700/50 border-green-500/20 text-white placeholder:text-gray-400"
            />
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="bg-slate-700/50 border-green-500/20 text-white">
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
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="bg-slate-700/50 border-green-500/20 text-white">
                <SelectValue placeholder="Filter by price" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-green-500/20">
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under50">Under £50M</SelectItem>
                <SelectItem value="50to100">£50M - £100M</SelectItem>
                <SelectItem value="over100">Over £100M</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transfer Targets */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Star className="h-5 w-5 mr-2 text-green-400" />
            Transfer Targets
          </CardTitle>
          <CardDescription className="text-green-400">
            Scouted players and transfer opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTargets.map((player) => (
              <div key={player.id} className="bg-slate-700/30 p-4 rounded-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  {/* Player Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-green-600 text-white font-semibold">
                        {player.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">{player.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Badge variant="outline" className="text-green-400 border-green-400">
                          {player.position}
                        </Badge>
                        <span>Age {player.age}</span>
                        <span>•</span>
                        <span>{player.nationality}</span>
                        <span>•</span>
                        <span>{player.club}</span>
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-sm">
                        <span className="text-white">OVR: <span className="font-semibold text-green-400">{player.overall}</span></span>
                        <span className="text-white">POT: <span className="font-semibold text-blue-400">{player.potential}</span></span>
                        {player.scouted && (
                          <Badge className="bg-blue-600 text-white text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            Scouted
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Player Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Market Value</p>
                      <p className="text-green-400 font-semibold">{player.value}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Wage Demand</p>
                      <p className="text-yellow-400 font-semibold">{player.wage}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Contract Until</p>
                      <p className="text-white font-semibold">{player.contract}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Our Interest</p>
                      <p className={`font-semibold ${getInterestColor(player.interest)}`}>{player.interest}</p>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className={getStatusColor(player.status)}>
                      {player.status}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                        Make Bid
                      </Button>
                      <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                        Scout Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transfers */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Clock className="h-5 w-5 mr-2 text-green-400" />
            Recent Big Transfers
          </CardTitle>
          <CardDescription className="text-green-400">
            Latest market movements and record deals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentTransfers.map((transfer, index) => (
              <div key={index} className="bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">{transfer.player}</h3>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>From: <span className="text-white">{transfer.from}</span></p>
                  <p>To: <span className="text-white">{transfer.to}</span></p>
                  <p>Fee: <span className="text-green-400 font-semibold">{transfer.fee}</span></p>
                  <p>Date: <span className="text-blue-400">{transfer.date}</span></p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransferMarket;
