// Type pour l'équipe
type Team = "A" | "B";

// Type State pour les penalties
type PenaltyState = {
  teamA: Team;
  teamB: Team;
  history: { team: Team; result: boolean }[];
};

type Score = {
    "Team A": number [],
    "Team B": number []
}

// Export
export { type Team, type PenaltyState, type Score };