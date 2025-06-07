
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Trophy, 
  Users, 
  Calendar, 
  Settings, 
  TrendingUp, 
  Star, 
  Shield,
  Database,
  Globe,
  Timer,
  Flag
} from "lucide-react";
import PlayerManagement from "@/components/PlayerManagement";
import MatchSimulator from "@/components/MatchSimulator";
import TransferMarket from "@/components/TransferMarket";
import TacticsBuilder from "@/components/TacticsBuilder";
import DatabaseViewer from "@/components/DatabaseViewer";
import TeamSelection from "@/components/TeamSelection";
import InternationalFootball from "@/components/InternationalFootball";
import DatabaseInterface from "@/components/DatabaseInterface";

interface Team {
  id: number;
  name: string;
  league: string;
  country: string;
  division: string;
  rating: number;
  budget: string;
  reputation: string;
  difficulty: "Beginner" | "Intermediate" | "Expert" | "Legendary";
}

const Index = () => {
  const [activeTab, setActiveTab] = useState("team-selection");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [currentSeason] = useState("2024/25");
  const [gameWeek] = useState(15);

  const clubStats = {
    name: selectedTeam?.name || "Select Team",
    position: 3,
    points: 32,
    wins: 10,
    draws: 2,
    losses: 3,
    goalsFor: 28,
    goalsAgainst: 15,
    form: ["W", "W", "L", "W", "D"]
  };

  const upcomingFixtures = [
    { opponent: "Liverpool FC", date: "Dec 15", competition: "Premier League", home: true },
    { opponent: "Arsenal FC", date: "Dec 22", competition: "Premier League", home: false },
    { opponent: "Chelsea FC", date: "Dec 29", competition: "FA Cup", home: true }
  ];

  const recentNews = [
    { title: "Marcus Rashford signs new 5-year contract", type: "Contract", urgency: "high" },
    { title: "Youth prospect Oliver Thompson promoted to first team", type: "Youth", urgency: "medium" },
    { title: "Training ground upgrade completed", type: "Facilities", urgency: "low" }
  ];

  const handleTeamSelect = (team: Team | null) => {
    setSelectedTeam(team);
    if (team) {
      setActiveTab("dashboard");
    } else {
      setActiveTab("matches"); // Go to simulation mode
    }
  };

  // If no team is selected, show team selection
  if (!selectedTeam && activeTab === "team-selection") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-green-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Football Manager Pro</h1>
                  <p className="text-green-400 text-sm">Choose your destiny</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-6">
          <TeamSelection onTeamSelect={handleTeamSelect} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Football Manager Pro</h1>
                <p className="text-green-400 text-sm">
                  {selectedTeam ? `Managing ${selectedTeam.name}` : "Simulation Mode"} • Season {currentSeason} • Week {gameWeek}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-400 border-green-400">
                <Timer className="h-3 w-3 mr-1" />
                Live Simulation
              </Badge>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900"
                onClick={() => setActiveTab("team-selection")}
              >
                Change Team
              </Button>
              <Button variant="outline" size="sm" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                Save Game
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-7 w-full bg-slate-800/50 border border-green-500/20">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Trophy className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="players" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Squad
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Matches
            </TabsTrigger>
            <TabsTrigger value="transfers" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <TrendingUp className="h-4 w-4 mr-2" />
              Transfers
            </TabsTrigger>
            <TabsTrigger value="tactics" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Shield className="h-4 w-4 mr-2" />
              Tactics
            </TabsTrigger>
            <TabsTrigger value="international" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Flag className="h-4 w-4 mr-2" />
              International
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Database className="h-4 w-4 mr-2" />
              Database
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {selectedTeam && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Club Overview */}
                <Card className="bg-slate-800/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-green-400" />
                      {clubStats.name}
                    </CardTitle>
                    <CardDescription className="text-green-400">
                      {selectedTeam.league} • Position {clubStats.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-gray-300">
                        <p>Points: <span className="text-white font-semibold">{clubStats.points}</span></p>
                        <p>Goals For: <span className="text-green-400">{clubStats.goalsFor}</span></p>
                      </div>
                      <div className="text-gray-300">
                        <p>Record: <span className="text-white">{clubStats.wins}W {clubStats.draws}D {clubStats.losses}L</span></p>
                        <p>Goals Against: <span className="text-red-400">{clubStats.goalsAgainst}</span></p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-2">Recent Form:</p>
                      <div className="flex space-x-1">
                        {clubStats.form.map((result, index) => (
                          <Badge 
                            key={index} 
                            variant={result === 'W' ? 'default' : result === 'D' ? 'secondary' : 'destructive'}
                            className={result === 'W' ? 'bg-green-600' : ''}
                          >
                            {result}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Fixtures */}
                <Card className="bg-slate-800/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-green-400" />
                      Upcoming Fixtures
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingFixtures.map((fixture, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                        <div>
                          <p className="text-white font-medium text-sm">
                            {fixture.home ? 'vs' : '@'} {fixture.opponent}
                          </p>
                          <p className="text-gray-400 text-xs">{fixture.competition}</p>
                        </div>
                        <Badge variant="outline" className="text-green-400 border-green-400 text-xs">
                          {fixture.date}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Club News */}
                <Card className="bg-slate-800/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-green-400" />
                      Club News
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentNews.map((news, index) => (
                      <div key={index} className="p-2 bg-slate-700/30 rounded">
                        <div className="flex items-start justify-between">
                          <p className="text-white text-sm font-medium leading-tight">{news.title}</p>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ml-2 ${
                              news.urgency === 'high' ? 'text-red-400 border-red-400' :
                              news.urgency === 'medium' ? 'text-yellow-400 border-yellow-400' :
                              'text-gray-400 border-gray-400'
                            }`}
                          >
                            {news.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <CardDescription className="text-green-400">
                  Manage your club efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900"
                    onClick={() => setActiveTab("players")}
                  >
                    <Users className="h-6 w-6 mb-2" />
                    Manage Squad
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900"
                    onClick={() => setActiveTab("tactics")}
                  >
                    <Shield className="h-6 w-6 mb-2" />
                    Set Tactics
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900"
                    onClick={() => setActiveTab("matches")}
                  >
                    <Calendar className="h-6 w-6 mb-2" />
                    Next Match
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900"
                    onClick={() => setActiveTab("transfers")}
                  >
                    <TrendingUp className="h-6 w-6 mb-2" />
                    Transfer Market
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players">
            <PlayerManagement />
          </TabsContent>

          <TabsContent value="matches">
            <MatchSimulator />
          </TabsContent>

          <TabsContent value="transfers">
            <TransferMarket />
          </TabsContent>

          <TabsContent value="tactics">
            <TacticsBuilder />
          </TabsContent>

          <TabsContent value="international">
            <InternationalFootball />
          </TabsContent>

          <TabsContent value="database">
            <DatabaseInterface />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
