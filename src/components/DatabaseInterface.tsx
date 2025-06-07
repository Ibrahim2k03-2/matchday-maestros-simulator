
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Download, 
  Upload, 
  Table, 
  FileText,
  Settings
} from "lucide-react";

const DatabaseInterface = () => {
  const [activeTable, setActiveTable] = useState("players");

  const databaseInfo = {
    name: "football_manager.db",
    size: "45.2 MB",
    tables: 12,
    records: 125840,
    lastUpdated: "2024-12-07 10:30:45"
  };

  const tables = [
    { name: "players", records: 25000, description: "Player data and attributes" },
    { name: "teams", records: 2500, description: "Club and national team information" },
    { name: "leagues", records: 150, description: "Competition and league data" },
    { name: "matches", records: 50000, description: "Match results and statistics" },
    { name: "transfers", records: 15000, description: "Transfer history and market data" },
    { name: "contracts", records: 30000, description: "Player contract information" },
    { name: "staff", records: 8000, description: "Coaches, scouts, and other staff" },
    { name: "fixtures", records: 12000, description: "Upcoming match schedule" },
    { name: "injuries", records: 5000, description: "Injury records and recovery data" },
    { name: "youth_players", records: 18000, description: "Youth academy prospects" },
    { name: "international", records: 1200, description: "National team data" },
    { name: "tournaments", records: 90, description: "International tournament info" }
  ];

  const sampleData = {
    players: [
      { id: 1, name: "Marcus Rashford", age: 26, position: "LW", overall: 86, club: "Manchester United" },
      { id: 2, name: "Kylian Mbappé", age: 25, position: "ST", overall: 91, club: "Real Madrid" },
      { id: 3, name: "Pedri", age: 21, position: "CM", overall: 85, club: "Barcelona" }
    ],
    teams: [
      { id: 1, name: "Manchester United", league: "Premier League", rating: 84, budget: 200000000 },
      { id: 2, name: "Real Madrid", league: "La Liga", rating: 89, budget: 300000000 },
      { id: 3, name: "Barcelona", league: "La Liga", rating: 86, budget: 250000000 }
    ]
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Database className="h-5 w-5 mr-2 text-green-400" />
            SQLite Database Interface
          </CardTitle>
          <CardDescription className="text-green-400">
            Manage your football database with SQLite storage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-white">{databaseInfo.size}</p>
              <p className="text-sm text-gray-400">Database Size</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-green-400">{databaseInfo.tables}</p>
              <p className="text-sm text-gray-400">Tables</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-blue-400">{databaseInfo.records.toLocaleString()}</p>
              <p className="text-sm text-gray-400">Total Records</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTable} onValueChange={setActiveTable} className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full bg-slate-800/50 border border-green-500/20">
          <TabsTrigger value="tables" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <Table className="h-4 w-4 mr-2" />
            Database Tables
          </TabsTrigger>
          <TabsTrigger value="query" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <FileText className="h-4 w-4 mr-2" />
            Sample Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tables.map((table) => (
              <Card key={table.name} className="bg-slate-800/50 border-green-500/20 hover:border-green-400/40 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white capitalize">{table.name}</h3>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        {table.records.toLocaleString()}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400">{table.description}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                        View Data
                      </Button>
                      <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                        Export
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="query" className="space-y-4">
          <Card className="bg-slate-800/50 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Sample Player Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-green-500/20">
                      <th className="text-left text-gray-400 p-2">ID</th>
                      <th className="text-left text-gray-400 p-2">Name</th>
                      <th className="text-left text-gray-400 p-2">Age</th>
                      <th className="text-left text-gray-400 p-2">Position</th>
                      <th className="text-left text-gray-400 p-2">Overall</th>
                      <th className="text-left text-gray-400 p-2">Club</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.players.map((player) => (
                      <tr key={player.id} className="border-b border-slate-700/50">
                        <td className="text-white p-2">{player.id}</td>
                        <td className="text-white p-2">{player.name}</td>
                        <td className="text-white p-2">{player.age}</td>
                        <td className="text-green-400 p-2">{player.position}</td>
                        <td className="text-blue-400 p-2">{player.overall}</td>
                        <td className="text-white p-2">{player.club}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Sample Team Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-green-500/20">
                      <th className="text-left text-gray-400 p-2">ID</th>
                      <th className="text-left text-gray-400 p-2">Name</th>
                      <th className="text-left text-gray-400 p-2">League</th>
                      <th className="text-left text-gray-400 p-2">Rating</th>
                      <th className="text-left text-gray-400 p-2">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.teams.map((team) => (
                      <tr key={team.id} className="border-b border-slate-700/50">
                        <td className="text-white p-2">{team.id}</td>
                        <td className="text-white p-2">{team.name}</td>
                        <td className="text-white p-2">{team.league}</td>
                        <td className="text-green-400 p-2">{team.rating}</td>
                        <td className="text-blue-400 p-2">£{(team.budget / 1000000).toFixed(0)}M</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="h-5 w-5 mr-2 text-green-400" />
            Database Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Database File:</span>
              <span className="text-white font-mono">{databaseInfo.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Last Updated:</span>
              <span className="text-white">{databaseInfo.lastUpdated}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <Badge className="bg-green-600 text-white">Connected</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatabaseInterface;
