class Solution(object):
    def countStudents(self, students, sandwiches):
        """
        :type students: List[int]
        :type sandwiches: List[int]
        :rtype: int
        """
        qcount=0;
        while len(students)>0 and qcount<=len(students):
            if students[0]==sandwiches[0]:
                students.pop(0);
                sandwiches.pop(0);
                qcount=0;
            else:
                students.append(students.pop(0));
                qcount=qcount+1;
        
        return len(students);