import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "app/components/ui/table";
import { Loader2 } from "lucide-react";
import pb from "~/routes/auth/pocketbase";
import { Link, useFetcher, useNavigate } from "react-router";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function CourseOptionsTable({
  courseid,
  closeDropdown,
}: {
  courseid: string;
}) {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const takeCourse = (course_instance_id) =>
    pb.send(`/api/lms/course-instances/${course_instance_id}/enrollment`, {
      method: "POST",
    });

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);

      const data = await pb.collection("course_instance").getFullList({
        filter: `course='${courseid}'`,
        expand: "course,teacher",
        $autoCancel: false,
      });

      setCourses(data);
      setLoading(false);
    };

    loadCourses();
  }, []);

  return (
    <>
      <Table>
        <TableCaption>Elérhető csoportok</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Csoport azonosító</TableHead>
            <TableHead>Tárgy neve</TableHead>
            <TableHead>Oktató</TableHead>
            <TableHead>Időpont</TableHead>
            <TableHead>Férőhely</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses &&
            courses.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.id}</TableCell>
                <TableCell>{c.expand?.course?.course_name || "N/A"}</TableCell>
                <TableCell>{`${c.expand.teacher.name} (${c.teacher})`}</TableCell>
                <TableCell>{c.time_table || "N/A"}</TableCell>
                <TableCell>{`${c.students.length}/${c.max_students}`}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={async () => {
                      try {
                        await takeCourse(c.id);

                        toast("Sikeres tárgyfelvétel", {
                          description: `A(z) ${c.expand.course.course_name} tárgyat felvetted ${c.expand.teacher.name}-hoz.`,
                          action: {
                            label: "Ugrás a felvett tárgyakhoz",
                            onClick: () => navigate("/courses"),
                          },
                        });
                      } catch (error) {
                        toast("Tárgyfelvétel sikertelen", {
                          description: (error as Error).message,
                        });
                      }

                      closeDropdown();
                    }}
                    variant="outline"
                  >
                    Tárgyfelvétel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
