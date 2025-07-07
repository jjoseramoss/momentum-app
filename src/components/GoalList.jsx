import React from 'react'
import GoalItem from './GoalItem'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";


const GoalList = ( { goals, deleteGoal, isComplete}) => {

  return (
    <Card className="w-full max-w-5xl mx-auto bg-[#23272f]">
        <CardHeader >
            <CardTitle>Your Goals</CardTitle>
            {/** The toolbar with search/filter will go here later */}
        </CardHeader>
        <CardContent className="overflow-x-auto">
            <Table className="w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>Goal</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/**Map over and render our GoalItems */}
                    {goals.map((goal) => 
                    
                        <GoalItem 
                            key={goal.id}
                            goal={goal}
                            deleteGoal={deleteGoal}
                            isComplete={isComplete}
                        />
                    )}

                </TableBody>
            </Table>
        </CardContent>
    </Card>

)
}

export default GoalList