
"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function AppTimeline() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Today</Timeline.Time>
          <Timeline.Title>Initial proposal</Timeline.Title>
          <Timeline.Body>
            The initial request is provided, whether that be for support or development work.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>48 hours</Timeline.Time>
          <Timeline.Title>Resposne</Timeline.Title>
          <Timeline.Body>
            Our team will be in contact within 48 hours to discuss availability, pricing and any other clarifications.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>2 weeks</Timeline.Time>
          <Timeline.Title>Clarification</Timeline.Title>
          <Timeline.Body>
            Reqirements are finalised, contracts are signed
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>1 month</Timeline.Time>
          <Timeline.Title>Work begins</Timeline.Title>
          <Timeline.Body>
            We get to work delivering value for you and your business.
          </Timeline.Body>
          <Button color="gray">
            Let's get started
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
