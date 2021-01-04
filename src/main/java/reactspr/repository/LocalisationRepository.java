package reactspr.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import reactspr.domain.Localisation;

/**
 * Spring Data repository for the Localisation entity.
 */
@Repository
public interface LocalisationRepository extends JpaRepository<Localisation, String> {
}
