# Implement Feature Command

This command helps implement new features across multiple sessions in Claude Code.

## Usage

Use this command when you need to:
- Add new functionality to existing components
- Create new components or modules
- Implement feature requests across multiple files
- Maintain consistency across development sessions

## Multi-Session Development Commands

### Session Context Commands
- `@context` - Load previous session context and current state
- `@resume <feature-name>` - Resume work on a specific feature from previous session
- `@checkpoint <description>` - Save current progress with description for next session

### Feature Implementation Commands
- `@implement <feature-description>` - Start implementing a new feature
- `@extend <component-name> <functionality>` - Extend existing component with new functionality
- `@refactor <target> <reason>` - Refactor code with specific reasoning
- `@integrate <feature> <target-location>` - Integrate feature into existing codebase

### Code Consistency Commands
- `@style-check` - Verify code follows project styling conventions
- `@pattern-match <existing-component>` - Match patterns from existing components
- `@dependency-check` - Check for missing imports or dependencies

### Testing & Validation Commands
- `@test-plan <feature>` - Generate testing approach for new feature
- `@validate <component>` - Validate component integration and functionality
- `@preview <changes>` - Preview how changes affect existing functionality

## Session Handoff Template

When ending a session, use this template:
